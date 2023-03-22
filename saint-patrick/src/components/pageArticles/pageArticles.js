import React, { useEffect, useState } from "react";
import { Button, Card } from "antd";
import {
  ShoppingCartOutlined,
  SettingOutlined
} from "@ant-design/icons";
import Article from "../article";
import "../../index.css";

const PageArticles = ({ index = -1 }) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8090/Article/getAll", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  }, []);

  let isAdmin = false;

  const getArticlesParCategorie = (index) => {
    if (index === -1) {
      isAdmin = true;
      return data;
    } else {
      return data.filter((elem) => elem.categories[0].id === index);
    }
  };

  return (
    <div className={"containerArticles"}>
      {getArticlesParCategorie(index).map((elem) => (
        <Article infos={elem} isAdmin={isAdmin} />
      ))}
    </div>
  );
};

export default PageArticles;

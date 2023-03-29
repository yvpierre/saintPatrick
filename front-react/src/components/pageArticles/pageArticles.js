import React, { useEffect, useState } from "react";
import { Button, Card, Modal } from "antd";
import { ShoppingCartOutlined, SettingOutlined } from "@ant-design/icons";
import Article from "../article";
import AddArticle from "../form/AddArticle";
import "../../index.css";

const PageArticles = ({ index = -1 }) => {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const refreshArticles = () => {
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
  };

  let isAdmin = false;

  const getArticlesParCategorie = (index) => {
    if (index === -1) {
      isAdmin = true;
      return data;
    } else {
      return data.filter((elem) => elem.categories[0].id === index);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={"containerArticles"}>
      {index === -1 && <Button onClick={showModal}>Ajouter un article</Button>}
      <Modal
        title="Ajouter un article"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <AddArticle  refreshArticles={refreshArticles} handleCancel={handleCancel}/>
      </Modal>
      {getArticlesParCategorie(index).map((elem) => (
        <Article
          infos={elem}
          isAdmin={isAdmin}
          refreshArticles={refreshArticles}
          handleCancel={handleCancel}
        />
      ))}
    </div>
  );
};

export default PageArticles;

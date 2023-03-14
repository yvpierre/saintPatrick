import { ConfigProvider, Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  ShoppingCartOutlined, SettingOutlined
} from "@ant-design/icons";
import Panier from "../panier/panier";
import PageArticles from "../pageArticles/pageArticles";
import "../../styles/navbar.css";


const { Header, Content, Footer } = Layout;


const components = [<PageArticles/>, <Panier/>,];

const GlobalLayout = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ConfigProvider>
      <Layout className="layout">
        <header className="navbar">
          <div className="logo">
            <img
              src={process.env.PUBLIC_URL + "/logo_site.png"}
              alt="Image"
            />
            <h1>SAINT<br/>PATRICK</h1>
          </div>
          <div className={"menuItems"}>
            <div onClick={() => handleMenuClick(4)}>
              Bières
            </div>
            <div onClick={() => handleMenuClick(1)}>
              Déguisements
            </div>
            <div onClick={() => handleMenuClick(3)}>
              Accessoires
            </div>
            <div onClick={() => handleMenuClick(2)}>
              Décorations
            </div>
          </div>
          <div className={"menuItems"}>
            <div onClick={() => handleMenuClick(-1)}
            ><SettingOutlined />&nbsp;Admin
            </div>
            <div onClick={() => handleMenuClick(4)}
            ><ShoppingCartOutlined/>&nbsp;Panier
            </div>
          </div>
          {/*
          <div>

          </div>
          <div>

          </div>
          */}


        </header>

        <Content
          style={{
            padding: "100px 50px",
          }}
        >
          <div
            className="site-layout-content"
            style={{
              padding: "10px 20px",
            }}
          >
            <PageArticles index={selectedIndex}/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ©2023 Created by Pierre x2, Pablo, Arthur
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};
export default GlobalLayout;

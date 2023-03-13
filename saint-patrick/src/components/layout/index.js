import { ConfigProvider, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import {
  ShoppingCartOutlined
} from "@ant-design/icons";
import Biere from "../biere/biere";
import Deguisement from "../deguisement/deguisement";
import Accessoire from "../accessoire/accessoire";
import Decoration from "../decoration/decoration";
import Panier from "../panier/panier";

const { Header, Content, Footer } = Layout;


const { darkAlgorithm } = theme;
const customTheme = {
  algorithm: [darkAlgorithm],
  token: {
    colorPrimary: "#008000",
    borderRadius: 5,
    colorBgBase: "#EFEFEF",
    colorTextBase: "black",
  },
};

const components = [<Biere/>, <Deguisement/>, <Accessoire/>, <Decoration/>, <Panier/>];

const GlobalLayout = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ConfigProvider theme={customTheme}>
      <Layout className="layout">
        <Header
          style={{
            padding: "0px",
            display: "flex",
            backgroundColor: "#008000",
            justifyContent: "space-between"
          }}
        >
          <div className="logo">
            <img
              style={{ height: "100%" }}
              src={process.env.PUBLIC_URL + "/Blog-petit-homme-5.png"}
              alt="Image"
            />
          </div>
          <div>
            <Menu mode="horizontal" style={{ backgroundColor: "#008000" }}>
              <Menu.Item onClick={() => handleMenuClick(0)}>
                Bières
                </Menu.Item>
              <Menu.Item onClick={() => handleMenuClick(1)}>
                Déguisements
              </Menu.Item>
              <Menu.Item onClick={() => handleMenuClick(2)}>
                Accessoires
              </Menu.Item>
              <Menu.Item onClick={() => handleMenuClick(3)}>
                Décorations
              </Menu.Item>
            </Menu>
          </div>
          <div>
            <Menu mode="horizontal" style={{ backgroundColor: "#008000" }}>
              <Menu.Item onClick={() => handleMenuClick(4)}
              ><ShoppingCartOutlined/>Panier
              </Menu.Item>
            </Menu>
          </div>
        </Header>
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
            {components[selectedIndex]}
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

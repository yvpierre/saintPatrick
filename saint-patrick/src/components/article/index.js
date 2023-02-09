import React from "react";
import {
  EditOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Modal } from "antd";
import { useState } from "react";
const { Meta } = Card;

export default function Article({ infos }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[<ShoppingCartOutlined key="buy" onClick={showModal} />]}
      >
        <Meta title={infos.nomArticle} description={infos.desc} />
      </Card>
      <Modal title="Information" open={isModalOpen} onOk={handleOk}>
        <p>Article ajouté au panier !</p>
      </Modal>
    </>
  );
}

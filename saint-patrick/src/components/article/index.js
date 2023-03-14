import React from "react";
import {
  EditOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import { Avatar, Card, Modal } from "antd";
import { useState } from "react";
import EditUser from "../form/EditUser";
const { Meta } = Card;

export default function Article({ infos, isAdmin }) {

  const [record, setSelectedUserId] = useState();

  const [openEdit, setOpenEdit] = useState(false);

  const showModalEdit = (infos) => {
    setSelectedUserId(infos);
    setOpenEdit(true);
  };

  
  const handleClose = () => {
    setOpenEdit(false);
  }

  return (
    <div className={"cardArticle"}>
      
      <Card
        style={{
          width: 250,
          marginBottom: 55
        }}
        cover={
          <img style={{width:"250px", height:"250px"}}
            alt="example"
            src= {infos.imgUrl}
          />
        }
        actions={
          isAdmin
            ? [<EditOutlined key="edit" onClick={() => showModalEdit(infos)} />, <DeleteOutlined key="delete" />]
            : [<ShoppingCartOutlined key="buy" />]
        }
      >
        <Meta title={infos.name} description={infos.price} />
      </Card>
      <Modal title="Modification d'un produit" visible={openEdit} onOk={handleClose} onCancel={handleClose}>
      <EditUser infos={record} />      
      </Modal>
    </div>
  );
}

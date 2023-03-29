import React, { useState } from "react";
import {
  EditOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Modal, notification } from "antd";
import EditArticle from "../form/EditArticle";

const { Meta } = Card;

export default function Article({ infos, isAdmin, refreshArticles }) {
  const [record, setSelectedUserId] = useState();
  const [openEdit, setOpenEdit] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const showModalEdit = (infos) => {
    setSelectedUserId(infos);
    setOpenEdit(true);
  };

  const handleClose = () => {
    setOpenEdit(false);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8090/Article/delete?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Suppression réussie");
        refreshArticles();
      } else {
        console.error("Erreur lors de la suppression");
        notification.warning({
          message: "Impossible de supprimer l'article (Article dans une commande)",
          placement: "topRight",
        });
      }
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
    }
  };

  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: "Êtes-vous sûr de vouloir supprimer cet article ?",
      content: "Cette action est irréversible.",
      okText: "Oui",
      okType: "danger",
      cancelText: "Non",
      onOk: () => {
        handleDelete(id);
      },
    });
  };

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartItems.findIndex(item => item.id === infos.id);
  
    if (index !== -1) {
      cartItems[index].quantityAdded += 1;
    } else {
      cartItems.push({...infos, quantityAdded: 1});
    }
  
    localStorage.setItem("cart", JSON.stringify(cartItems)); 
    setShowNotification(true);
    notification.success({
      message: "Article ajouté au panier",
      placement: "topRight",
    });
  };
  
  
  

  return (
    <div className={"cardArticle"}>
      <Card
        style={{
          width: 250,
          marginBottom: 55,
        }}
        cover={
          <img
            style={{ width: "250px", height: "250px" }}
            alt="example"
            src={infos.imgUrl}
          />
        }
        actions={
          isAdmin
            ? [
                <EditOutlined
                  key="edit"
                  onClick={() => showModalEdit(infos)}
                />,
                <DeleteOutlined
                  key="delete"
                  onClick={() => showDeleteConfirm(infos.id)}
                />,
              ]
            : [<ShoppingCartOutlined key="buy" onClick={handleAddToCart} />]
        }
      >
        <Meta title={infos.name} description={infos.price} />
      </Card>
      <Modal
        title="Modification d'un produit"
        open={openEdit}
        onOk={handleClose}
        onCancel={handleClose}
        footer={null}
      >
        <EditArticle
          handleClose={handleClose}
          refreshArticles={refreshArticles}
          infos={record}
        />
      </Modal>
    </div>
  );
}

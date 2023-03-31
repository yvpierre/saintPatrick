import React from "react";
import { Row, Col, Card, Image, Form, Input, Button, notification } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Panier = () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let total = cartItems.reduce((acc, item) => acc + item.price * item.quantityAdded, 0);
  let discount = 0;

  if (total >= 50) {
    discount = total * 0.2;
  }

  total -= discount; 

  const onFinish = (values) => {
    // Créer un tableau contenant les articles ajoutés au panier
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const articles = cartItems.map((item) => ({ id: item.id, name: item.name, price: item.price }));
  
    // Envoyer la commande à l'API
    fetch('http://localhost:8090/Command/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        buyerName: values.name,
        buyerEmail: values.email,
        buyerAddress: values.address,
        amount: total,
        articles: articles
      })
    })
    .then(response => {
      if (response.ok) {
        console.log('La commande a été envoyée avec succès');
        // Vider le panier après l'envoi de la commande
        localStorage.removeItem('cart');
        // Afficher une notification de succès
        notification.success({
          message: 'Commande envoyée',
          description: 'Votre commande a été envoyée avec succès',
          placement: 'topRight'
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        console.log('Une erreur est survenue lors de l\'envoi de la commande');
      }
    })
    .catch(error => {
      console.error('Une erreur est survenue lors de l\'envoi de la commande :', error);
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="cart-container">
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <h2 className="cart-title">Mon panier ({cartItems.length})</h2>
          {cartItems.map((item) => (
            <Card hoverable key={item.id} className="cart-item">
              <Image src={item.imgUrl} preview={false} width={100} />
              <div className="cart-item-content">
                <Meta title={item.name} description={`Prix unitaire : ${item.price} €`} />
                <p>Quantité : {item.quantityAdded}</p>
              </div>
            </Card>
          ))}
        </Col>
        <Col span={8}>
          <div className="checkout-form-container">
            <h2 className="checkout-title">Informations de livraison</h2>
            <Form
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{ remember: true }}
            >
              <Form.Item
                label="Nom"
                name="name"
                rules={[{ required: true, message: "Veuillez entrer votre nom" }]}
              >
            <Input />
          </Form.Item>

          <Form.Item
            label="Adresse e-mail"
            name="email"
            rules={[
              { type: "email", message: "Veuillez entrer une adresse e-mail valide" },
              { required: true, message: "Veuillez entrer votre adresse e-mail" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Adresse de livraison"
            name="address"
            rules={[{ required: true, message: "Veuillez entrer votre adresse de livraison" }]}
          >
            <Input />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            className="checkout-button"
            icon={<ShoppingCartOutlined />}
          >
            Commander ({total.toFixed(2)} € {discount > 0 && `(réduction de ${discount.toFixed(2)} €)`})
          </Button>
        </Form>
      </div>
    </Col>
  </Row>
</div>
);
};

export default Panier;
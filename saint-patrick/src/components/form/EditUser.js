import React, { useEffect, useState } from "react";
import { Form, Input, Button, Alert, Table } from "antd";



const FormEditUser = ({ infos }) => {
  const [form] = Form.useForm();

console.log(infos)



  return (
    <>
      <Form
        labelAlign="left"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 15 }}
        layout="horizontal"
        form={form}
        initialValues={{
            Nom: infos.name,
            Catégorie: infos.categories[0].name,
            Prix: infos.price,
            Description: infos.description,
            Taille: infos.size,
            Url_image: infos.imgUrl,


          }}
      >
        <Form.Item
          label="Nom"
          name="Nom"
          rules={[{ required: true, message: "Veuillez entrer votre nom" }]}
        >
          <Input
            style={{
              backgroundColor: "#fff",
              borderRadius: "3px",
              color: "black",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Catégorie"
          name="Catégorie"
          rules={[{ required: true, message: "Veuillez entrer votre prénom" }]}
        >
          <Input
            style={{
              backgroundColor: "#fff",
              borderRadius: "3px",
              color: "black",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Prix"
          name="Prix"
          rules={[{ required: true, message: "Veuillez entrer votre adresse courriel" }]}
        >
          <Input
            style={{
              backgroundColor: "#fff",
              borderRadius: "3px",
              color: "black",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Description"
          name="Description"
          rules={[{ required: true, message: "Veuillez entrer votre adresse courriel" }]}
        >
          <Input
            style={{
              backgroundColor: "#fff",
              borderRadius: "3px",
              color: "black",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Taille"
          name="Taille"
          rules={[{ required: true, message: "Veuillez entrer votre adresse courriel" }]}
        >
          <Input
            style={{
              backgroundColor: "#fff",
              borderRadius: "3px",
              color: "black",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Url image"
          name="Url_image"
          rules={[{ required: true, message: "Veuillez entrer votre adresse courriel" }]}
        >
          <Input
            style={{
              backgroundColor: "#fff",
              borderRadius: "3px",
              color: "black",
            }}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default FormEditUser;

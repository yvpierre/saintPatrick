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
            Nom: infos.nomArticle,
            Catégorie: infos.category,
            Prix: infos.prix,
            Description: infos.desc,
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
      </Form>
    </>
  );
};

export default FormEditUser;

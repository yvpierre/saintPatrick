import React from 'react';
import { Form, Input, InputNumber, Button, Select, Switch } from 'antd';

const { Option } = Select;

const AddArticle = ({ refreshArticles, handleCancel }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  
    const article = {
      categories: values.categories.map(category => ({ id: category, name: 'Nom de la catégorie', description: 'Description de la catégorie' })), // remplacer avec les véritables objets de catégorie sélectionnés par l'utilisateur
      name: values.name,
      description: values.description,
      price: values.price,
      quantity: values.quantity,
      imgUrl: values.imgUrl,
      size: values.size,
      isMajor: values.isMajor,
      stockDispo: values.isStockDispo
    };
  
    fetch('http://localhost:8090/Article/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    })
    .then(response => {
        response.json();
        refreshArticles();
        handleCancel();
        console.log("test");
    })
    .then(data => {console.log(data);})    
      .catch(error => console.error(error));
  };
  

  return (
    <Form
      form={form}
      name="articleForm"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item
        label="Nom"
        name="name"
        rules={[{ required: true, message: 'Veuillez entrer le nom de l\'article' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Veuillez entrer la description de l\'article' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Prix"
        name="price"
        rules={[{ required: true, message: 'Veuillez entrer le prix de l\'article' }]}
      >
        <InputNumber min={0} step={0.01} precision={2} />
      </Form.Item>

      <Form.Item
        label="Quantité"
        name="quantity"
        rules={[{ required: true, message: 'Veuillez entrer la quantité de l\'article' }]}
      >
        <InputNumber min={0} step={1} />
      </Form.Item>

      <Form.Item
        label="Image URL"
        name="imgUrl"
        rules={[{ required: true, message: 'Veuillez entrer l\'URL de l\'image de l\'article' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Disponible en stock"
        name="isStockDispo"
        valuePropName="checked"
        rules={[{ required: true, message: 'Veuillez choisir si l\'article est disponible en stock ou non' }]}
      >
        <Switch />
      </Form.Item>

      <Form.Item
        label="Catégories"
        name="categories"
        rules={[{ required: true, message: 'Veuillez choisir au moins une catégorie pour l\'article' }]}
      >
        <Select mode="multiple">
          <Option value="1">Déguisement</Option>
          <Option value="2">Décorations</Option>
          <Option value="3">Accéssoires</Option>
          <Option value="4">Bières</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Taille"
        name="size"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Majeur"
        name="isMajor"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
    
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Enregistrer
        </Button>
      </Form.Item>
    </Form>
    );
};

export default AddArticle;
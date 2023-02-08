import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Biere from '../bieres';
import biere from '../bieres';
import Deguisement from '../deguisement';
const { Header, Content, Footer } = Layout;



function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Bières', '1' ),
  getItem('Déguisements', '2'),
  getItem('Accessoires', '3'),
  getItem('Décorations', '4'),

  
];


const GlobalLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header style={{ padding: "0px" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{ backgroundColor: 'green' }}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
       ©2023 Created by Pierre x2, Pablo, Arthur
      </Footer>
    </Layout>
  );
};
export default GlobalLayout;
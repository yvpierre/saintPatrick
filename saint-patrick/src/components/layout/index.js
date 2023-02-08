import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Biere from '../article';
import biere from '../article';
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
  return (
    <Layout className="layout">
      <Header style={{ padding: "0px", display: 'flex', justifyContent: 'center', backgroundColor: 'green' }}>
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
          padding: '100px 50px',
        }}
      >
        <div
          className="site-layout-content"
<<<<<<< Updated upstream
          style={{
            background: colorBgContainer,
            padding: "10px 20px"
          }}
=======
>>>>>>> Stashed changes
        >
          <Biere/>
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
import { useState } from 'react';
import {
  DesktopOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Tasks from '../Pages/Tasks/Tasks';

  const { Header, Content, Footer, Sider } = Layout;
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const PageLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [content, setContent] = useState('Select a project.');
    const {
      token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleClick = (item) => {
    switch (item.key) {
      case '1':
        setContent(<Tasks />)
        break;
      case '2':
        setContent('Task process is not added.')
        break;
      default:
        break;
    }
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Tasks</Breadcrumb.Item>
            <Breadcrumb.Item>Projects</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {content}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
         Damla Nur Yilmaz ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};
export default PageLayout;
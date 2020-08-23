import React, { Component } from 'react';
import { Layout } from 'antd';
import Slider from './Sider';

const { Header, Footer, Sider, Content } = Layout;

class Home extends Component {
   render() {
      return (
         <Layout>
            <Sider>
               <Slider />
            </Sider>
            <Layout>
               <Header>Header</Header>
               <Content>Content</Content>
               <Footer>Footer</Footer>
            </Layout>
         </Layout>
      );
   }
}

export default Home;
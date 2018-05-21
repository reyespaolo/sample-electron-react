import React, { Component } from 'react';

import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';
import 'primereact/resources/themes/cupertino/theme.css';

import Layout from '../components/Layout/Layout';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';

class App extends Component {


  render() {

    return (
          <Layout>
            <BurgerBuilder />
          </Layout>

    );
  }
}

export default App;

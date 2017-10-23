import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/header';
import PostsList from './components/posts_list';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import { Grid, Col, Row } from 'react-bootstrap';

const ENDPOINT = 'https://newsapi.org/v1/articles';
const API_KEY = '015fa2772f3e4b78af5b1c01a7829d15';

class App extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    axios.get(`${ENDPOINT}?source=techcrunch&sortBy=latest&apiKey=${API_KEY}`)
      .then(resp => {
        console.log(resp);
        this.setState({ articles: resp.data.articles })
      }).catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <MuiThemeProvider>
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <Header />
            <PostsList articles={this.state.articles} />
          </Col>
        </Row>
      </Grid>
    </MuiThemeProvider>
    );
  }
}

export default App;

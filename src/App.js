import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/header';
import PostsList from './components/posts_list';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Col, Row } from 'react-bootstrap';
import './App.css';
import { ENDPOINT, API_KEY } from './components/posts_list/constants';
import { fetchPosts } from './components/posts_list/actions';

class App extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    axios.get(`${ENDPOINT}?source=techcrunch&sortBy=latest&apiKey=${API_KEY}`)
      .then(resp => {
        console.log(resp);
        this.setState({ articles: resp.data.articles });
      }).catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Grid className="container">
          <Row>
            <Col md={12}>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2}>
              <PostsList articles={this.state.articles} />
            </Col>
          </Row>
        </Grid>
    </MuiThemeProvider>
    );
  }
}

export default App;

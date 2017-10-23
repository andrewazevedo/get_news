import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class PostsList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  render() {
    const { articles } = this.props;

    return (
      <div>
        {articles.map((artic, index) =>
          <Card key={index} className="card-style">
            <CardMedia>
              <img src={artic.urlToImage} alt="" />
            </CardMedia>
            <CardTitle title={artic.title} subtitle={`by ${artic.author}`} />
            <CardText>
              {artic.description}
            </CardText>
            <CardActions>
              <FlatButton
                primary
                label="read more"
                href={artic.url}
                target="_blank"
              />
            </CardActions>
          </Card>
        )}
      </div>
    );
  }
}

export default PostsList;

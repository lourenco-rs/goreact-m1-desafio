import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Post from './components/Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: 'Diego Fernandes',
        avatar: 'https://avatars1.githubusercontent.com/u/2254731?s=400&v=4',
        time: '16/01/2019 12:11',
        content:
          'Texto do Diego Fernandes... Texto do Diego Fernandes...Texto do Diego Fernandes...Texto do Diego Fernandes...Texto do Diego Fernandes...Texto do Diego Fernandes...Texto do Diego Fernandes...Texto do Diego Fernandes...Texto do Diego Fernandes...',
      },
      {
        id: 2,
        author: 'Jonathan Silva',
        avatar: 'https://avatars1.githubusercontent.com/u/33843748?s=400&v=4',
        time: '10/01/2019 10:11',
        content:
          'Texto do Jonathan Silva... Texto do Jonathan Silva... Texto do Jonathan Silva... Texto do Jonathan Silva... Texto do Jonathan Silva... Texto do Jonathan Silva... Texto do Jonathan Silva... ',
      },
      {
        id: 3,
        author: 'Charles-Axel Dein',
        avatar: 'https://avatars3.githubusercontent.com/u/327472?s=400&v=4',
        time: '09/01/2019 05:23:',
        content: 'Texto de terceiro post. Bem pequeno',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Header />
        <div className="main-content">
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));

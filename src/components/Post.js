import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader avatar={props.data.avatar} author={props.data.author} time={props.data.time} />
    <div className="post__content">{props.data.content}</div>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;

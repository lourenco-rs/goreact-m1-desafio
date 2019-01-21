import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <header className="post__header">
    <img src={props.avatar} className="post__avatar" alt="Avatar" />
    <div className="post__info-wrapper">
      <h4 className="post__author">{props.author}</h4>
      <div className="post__date">{props.time}</div>
    </div>
  </header>
);

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;

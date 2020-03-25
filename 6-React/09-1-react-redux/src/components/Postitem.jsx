import React from 'react';

const PostItem = ({ post: { id, title, body } }) => {
  return (
    <div className='card text-center' id={id}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostItem;

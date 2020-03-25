import React from 'react';
import Postitem from './Postitem';

const PostAll = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <div style={userStyle}>
        {posts.map(item => (
          <Postitem key={item.id} post={item} />
        ))}
      </div>
    </div>
  );
};
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '1rem'
};
export default PostAll;

import React from 'react';
import Useritem from './Useritem.jsx';
import { Spinner } from '../spinner/Spinner.jsx';

const Users = ({ loading, users }) => {
  if (!loading) {
    return (
      <div style={userStyle}>
        {users.map(item => (
          <Useritem key={item.id} user={item} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};
export default Users;

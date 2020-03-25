import React from 'react';
import Button  from '@material-ui/core/Button';



const PostForm = ({submitHandler}) => {
  return (
    <>
      <h1>Add Post</h1>
      <form onSubmit={submitHandler}>
      <label htmlFor='title'>Title: </label>
      <input type='text' name='title' />
      <br />
      <br />
      <label htmlFor='post'>Post: </label>
      <textarea name='post' id='' cols='30' rows='10'></textarea> <br />
      <br />
      <Button variant="contained" color="primary" type='submit'  >Submit</Button>
      </form>
    </>
  );
};

export default PostForm;

const express = require('express');
const router = express.Router();
const MovieReviews = require('../models/MovieReviews');

router.get('/get-review', async (req, res) => {
  //we need await to get the data first and then response to the route
  let reviews = await MovieReviews.find();
  res.send(reviews);
});

router.post('/new-review', async (req, res) => {
  let { title, rating, comment } = req.body;

  let newReview = new MovieReviews({
    title: title,
    rating: parseInt(rating),
    comment: comment,
  });

  newReview
    .save()
    .then((response) => {
      console.log(response);
      res.send({ msg: 'new review saved', mongo_response: response });
    })
    .catch((error) => {
      console.log(error);
      res.send({ msg: error });
    });
});

//Put is not working yet

router.put('/update-review', async (req, res) => {
  let { title, rating, comment, id } = req.body;

  let updateReview = new MovieReviews({
    title,
    rating: parseInt(rating),
    comment,
  });

  MovieReviews.findByIdAndUpdate(id)
    .save()
    .then((response) => {
      console.log(response);
      res.send({ msg: 'review was updated', mongo_response: response });
    })
    .catch((error) => {
      console.log(error);
      res.send({ msg: error });
    });
});

router.delete('/delete-review', (req, res) => {
  let { id } = req.body;

  MovieReviews.findByIdAndDelete(id)
    .then((response) => {
      console.log(response);
      res.send({ msg: 'Review was deleted', mongo_response: response });
    })
    .catch((error) => {
      console.log(error);
      res.send({ msg: error });
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const MovieReviews = require('../models/MovieReviews');

router.get('/get-review', async (req, res) => {
  //we need await to get the data first and then response to the route
  let reviews = await MovieReviews.find();
  res.send(reviews);
});

router.post('/new-review', async (req, res) => {
  let { title, rating, comment, movieTitle, movieId } = req.body;

  let newReview = new MovieReviews({
    title,
    rating: parseInt(rating),
    comment,
    movieTitle,
    movieId,
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
  let { title, rating, comment, id, movieTitle, movieId } = req.body;

  let newData = {
    title,
    rating: parseInt(rating),
    comment,
    movieTitle,
    movieId,
  };

  MovieReviews.findByIdAndUpdate(id, newData)
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

router.get('/get-reviews-movie', async (req, res) => {
  let movieId_req = req.query.movieId;

  let reviews = await MovieReviews.find({ movieId: movieId_req });
  res.send(reviews);
});

module.exports = router;

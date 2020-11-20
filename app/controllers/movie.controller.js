const db = require("../models");
const Movie = db.movies;
const Review = db.reviews;

// Create and Save new movies
exports.createMovie = (movie) => {
  return Movie.create({
    title: movie.title,
    description: movie.description,
  })
    .then((movie) => {
      console.log(">> Created movie: " + JSON.stringify(movie, null, 4));
      return movie;
    })
    .catch((err) => {
      console.log(">> Error while creating movie: ", err);
    });
};

// Create and Save new reviews
exports.createReview = (movieId, review) => {
  return Review.create({
    name: review.name,
    text: review.text,
    movieId: movieId,
  })
    .then((review) => {
      console.log(">> Created review: " + JSON.stringify(review, null, 4));
      return review;
    })
    .catch((err) => {
      console.log(">> Error while creating review: ", err);
    });
};

// Get the reviews for a given movie
exports.findMovieById = (movieId) => {
  return Movie.findByPk(movieId, { include: ["reviews"] })
    .then((movie) => {
      return movie;
    })
    .catch((err) => {
      console.log(">> Error while finding movie: ", err);
    });
};

// Get the reviews for a given review id
exports.findReviewById = (id) => {
  return Review.findByPk(id, { include: ["movie"] })
    .then((review) => {
      return review;
    })
    .catch((err) => {
      console.log(">> Error while finding review: ", err);
    });
};

// Get all movies include reviews
exports.findAll = () => {
  return Movie.findAll({
    include: ["reviews"],
  }).then((movies) => {
    return movies;
  });
};
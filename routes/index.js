const express = require("express");
const route = express.Router();
const controllers = require("../controllers/index");

route.get("/anime", controllers.getAnime);

route.get("/anime/:anime_id/episode", controllers.getEpisodesOfAnime);
route.get("/anime/episode/:episode_id", controllers.getEpisodeOfAnime);

route.get("/genres", controllers.getGenres);

module.exports = route;

# Assignment 1 - ReactJS app.

Name: Mustafe Abdi Mohamoud

## Overview.

A movie app built with React users can search and filter movies by genre you can also add movies to your favorites all  information about  movies is retrieved using the TMDB  public API.


### Features.
 
+ Top Rated movies page
+ Popular page
+ Actors page
+ Added Pagination Home Page, Upcoming, Trending, Top Rated, Popular


## Setup requirements.

Running this project: install nodeJS Clone this repo or download. Open the working directory and run.

```
npm install
```

Register on TMDB and get the API credentials.[here](https://developer.themoviedb.org/)
On TMDB go to Settings->API->Create ->Request API ->Developer -> And enter required data.
create .env file in your project and add the TMDB API key 

```
REACT_APP_TMDB_KEY=  API key value
```

Runing the app
```
npm start
```
Then you can access your app on

```
http://localhost:3000/
```



## API endpoints.

GET
/movie/toprated
Get the top rated movies on TMDB.
**Get Top Rated**: `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`

GET
/person/popular
Get the list of popular people on TMDB. This list updates daily.
**Get Actors** `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`

GET
/movie/upcoming
Get a list of upcoming movies in theatres.
**Get Upcoming** `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`

## Movie App Design.
<img width="1512" alt="Screenshot 2023-11-26 at 13 50 15" src="https://github.com/mustafe2889/mustafe2889/assets/59968812/9844594e-2077-460e-b5df-c7cadffc0c6d">

<img width="1512" alt="Screenshot 2023-11-26 at 14 11 31" src="https://github.com/mustafe2889/mustafe2889/assets/59968812/85afde6c-b555-453f-ac8f-0310ab8959ef">

## Routing.

+ GET /home - displays all movies.
+ GET /reviews/:id - displays a particular review.
+ GET /movies/favourites - displaying selected user favourites
+ GET /movies/upcoming - display upcoming movies
+ GET /movies/topRatedMovies - displays top rated movies
+ GET /movies/:id - displays a particular movie
+ GET /movies/:id - displays a particular actor
+ GET /actor - displays all popular actors 

## Independent learning (If relevant).

**Pagination** Enables for data to be cached locally and reduces a strain on the server. Works properly.
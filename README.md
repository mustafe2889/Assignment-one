# Assignment 1 - ReactJS app.

Name: [Mustafe Abdi Mohamoud]

## Overview.

A movie app built with React users can search and filter movies by genre you can also add movies to your favorites all  information about  movies is retrieved using the TMDB  public API.


### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
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

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.
+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /blogs - displays all published blogs.
+ /blogs/:id - displays a particular blog.
+ /blogs/:id/comments - detail view of a particular blog and its comments.
+ etc.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).
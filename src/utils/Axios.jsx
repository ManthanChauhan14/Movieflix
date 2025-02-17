import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers:{
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTQxY2IyMzljZDMxZGEwNjRiMzYyMjE2ZDJmNzc2MyIsIm5iZiI6MTczODkxOTg4OC4yOTksInN1YiI6IjY3YTVjZmQwOTM3ZDJlOWI2MDY2Y2FlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1dDA8ZJgfB3MJuTtKsBZLRK4Qrwj9UQu2XJLlUY0Uk'
  
    }
})
export default instance
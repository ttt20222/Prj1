
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTAzOWQwOTUzYjRhZWQ5MjI3ZjI2NTk1OGYyNjY0YyIsInN1YiI6IjY2MjlmZDcxMjNkMjc4MDExZDMzM2QyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b4Cn-Vd8CJ6AMD6OpU5zoFauyOgCvLy5ufYQ5l2hCac'
  }
};


fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)     //api 정보 불러오기

  .then((response) => response.json())
  .then((response) => {

    const mainBox = document.querySelector('.main_box');

    response.results.forEach(result => {
      let original_title = result.original_title;
      let overview = result.overview;
      let poster_path = result.poster_path;
      let vote_average = result.vote_average;

      let temp_html = `
            <div class="card">
              <div class="card-body">
                  <h5 class="card-title">${original_title}</h5>
                  <img src="https://image.tmdb.org/t/p/w500/${poster_path}" class="card-img-top" alt="...">
                  <p class="card-text">${overview}</p>
                  <div class="rating">
                      <i class="rating__star far fa-star"></i>
                      <i class="rating__star far fa-star"></i>
                      <i class="rating__star far fa-star"></i>
                      <i class="rating__star far fa-star"></i>
                      <i class="rating__star far fa-star"></i>
                      <p>${vote_average}/10</p>
                  </div>
              </div>
            </div>`;

      mainBox.insertAdjacentHTML('beforeend', temp_html);
    });
  })
  .catch(err => console.error(err));




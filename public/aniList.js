let trending = "TRENDING_DESC"
let allTimePopular = "POPULARITY_DESC"
let userRated = "SCORE_DESC"
let userFavorited = "FAVOURITES_DESC"




function renderAnime(sort) {
  const query = `
          query ($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
      }
      media(search: $search, type: ANIME, sort: ${sort}) {
        id
        idMal
        title {
          romaji
          english
          native
        }
        type
        genres
        description
        coverImage {
          extraLarge
          medium
          large
          color
        }
      }
    }
  }
  `;

  let variables = {
    page: 1,
    perPage: 12,
  };

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // Define the config we'll need for our Api request
  var url = 'https://graphql.anilist.co',
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    };

  // Make the HTTP Api request
  fetch(url, options).then(handleResponse)
    .then(handleData)
    .catch(handleError);

  function handleResponse(response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json);
    });
  }

  function handleData({ data }) {
    console.log(data);

 
    

    let anime = data.Page.media
    anime.forEach(anime => {
      let synopsis = anime.description
      let unquotedSynopsis = synopsis.replace(/["]+/g, '')
      let genres = anime.genres

      let trendingList = document.getElementById(sort)

      let trendingAnime = document.createElement('div')
      trendingAnime.classList.add('cell-lg-2')
      trendingAnime.classList.add('cell-md-4')
      trendingAnime.classList.add('cell-sm-6')
      trendingAnime.classList.add('media-card')

      if (anime.title.english){
        trendingAnime.innerHTML = `

            <div class="img-container thumbnail">
              <img src="${anime.coverImage.large}" alt="anime cover image" class="coverImg"
              data-role="popover"
              data-popover-position="right"
              data-hide-on-leave="true"
              data-popover-text="
              <h6 class='title animeTitle'>
                ${anime.title.english}
              </h6>
              <hr>
              <p>${unquotedSynopsis}</p>
              <hr>
              <div></div>
              "
              >
              <button class="button light mt-1"><span class="mif-add"> Add to list</span></button>
            </div>
            `  
      }
      else {
        trendingAnime.innerHTML = `
            <div class="img-container thumbnail">
              <img src="${anime.coverImage.large}" alt="anime cover image" class="coverImg"
              data-role="popover"
              data-popover-position="right"
              data-hide-on-leave="true"
              data-popover-text="
              <h6 class='title animeTitle'>
                ${anime.title.romaji}
              </h6>
              <hr>
              <p>${unquotedSynopsis}</p>
              "
              >
              <button class="button light mt-1"><span class="mif-add"> Add to list</span></button>
            </div>
            `
      }
      trendingList.append(trendingAnime)  
    })
  }

  function handleError(error) {
    alert('Error, check console');
    console.error(error);
  }

}

renderAnime(userRated)
renderAnime(trending)
renderAnime(allTimePopular)
renderAnime(userFavorited)




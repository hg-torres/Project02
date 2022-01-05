searchInfo = "Made in Abyss"

function searchFnc(searchInfo) {
  // Here we define our query as a multi-line string
  // Storing it in a separate .graphql/.gql file is also possible
  const query = `
                    query ($id: Int, $page: Int, $perPage: Int, $search: String) {
            Page(page: $page, perPage: $perPage) {
              pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
              }
              media(id: $id, search: $search, sort: POPULARITY_DESC) {
                id
                idMal
                title {
                  romaji
                  english
                  native
                }
                type
                endDate {
                  year
                  month
                  day
                }
                startDate {
                  year
                  month
                  day
                }
                studios(isMain: true) {
                  nodes {
                    name
                  }
                }
                isAdult
                source
                genres
                volumes
                episodes
                chapters
                siteUrl
                status
                averageScore
                meanScore
                popularity
                description
                favourites
                coverImage {
                  extraLarge
                  medium
                  large
                  color
                }
              }
            }
  }`;

  // Define our query variables and values that will be used in the query request
  var variables = {
    search: searchInfo,
    page: 1,
    perPage: 5
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

  function handleData(data) {
    console.log(data);
    let animeResult = data.data.Page.media
    console.log(data.data.Page.media[0].title.english)

    animeResult.forEach(anime => {
      let searchId = anime.id;
      let searchURL = anime.coverImage.medium;
      let searchTitle = anime.title.english;
      let searchSynopsis = anime.description;
      let searchScore = anime.meanScore;

      let searchElem = document.createElement('div');
      searchElem.classList = " ";

      searchElem.innerHTML =
        `
              <div class="oneAnime borderBottom">
              <div class="fade-in">
              <img src='${searchURL}' alt='${searchTitle}'">
              </div>
              <button class="button link saveBtn fg-green large" data-index="${searchId}">+
              </button>
              <h3>${searchTitle}</h3>
              <h4>Rating: ${searchScore}</h4>
              <p><strong>Synopsis</strong>: ${searchSynopsis}</p>
              </div>
              `;

      document.getElementById(`results`).append(searchElem)
    })



  }

  function handleError(error) {
    alert('Error, check console');
    console.error(error);
  }


}
// Materialize to use JS ex: Nav Bar and drop down menus 
// M.AutoInit()

// click event for searching anime
document.getElementById(`search`).addEventListener(`click`, event => {
  event.preventDefault()
  const searchInfo = document.getElementById(`searchInfo`).value
  console.log(searchInfo)

  // removes previous search from innerHTML 
  document.getElementById('results').innerHTML = ''
  document.getElementById('more').innerHTML = ''

  // adds more results button after first search (currently only using 10 results)
  let moreResults = document.createElement('button');
  moreResults.classList = "center-align col s12 m6 l6 offset-m3 offset-l3";
  moreResults.innerHTML = "More Results";

  document.getElementById('more').append(moreResults)

  searchFnc(searchInfo)

})
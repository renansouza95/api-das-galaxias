const getLeagues = (league, year) => {
  const url = `https://api-football-standings.azharimm.site/leagues/${league}/standings?season=${year}&sort=asc` 
	return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
}

// async function showStanding(val1, val2) {
//   const request = await getLeagues(val1, val2);
//   const { data } = request;
//   console.log(request);
// }

// async function createStandings(league, click) {
//   const getYear = document.querySelector('.')
//   const request = await getLeagues(league, getYear);
//   const standing = request.standings.map 
// }

// const getChampionship = (league) => {
//   const teams = Array.from(league)
//   teams.forEach((team) => {
//     console.log(team)
//   })
// }

showStanding('eng.1', '2020');

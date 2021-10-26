const table = document.querySelector('.seasons');

const getSeasons = async (championship) => {
  const url = `https://api-football-standings.azharimm.site/leagues/${championship}/seasons` 
fetch(url)
.then(response => response.json())
.then(data => getLeagueSeasons(data))
.catch(err => {
	console.error(err);
});
} 

const getLeagueSeasons = (league) => {
  const seasons = league.data.seasons;
  const row = document.createElement('tr');
  const leagueName = document.createElement('th');
  leagueName.innerHTML = league.data.name;
  row.appendChild(leagueName)
  table.appendChild(row)
  seasons.forEach((season) => {
    const rowElement = document.createElement('td');
    rowElement.innerHTML = season.year;
    row.appendChild(rowElement)
    table.appendChild(row)
  });
}

getSeasons('arg.1')
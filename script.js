const tableSeasons = document.querySelector('.seasons');
const body = document.querySelector('.stats');
let array = [];

const getSeasons = async (championship) => {
  const url = `https://api-football-standings.azharimm.site/leagues/${championship}/seasons` 
  fetch(url)
  .then(response => response.json())
  .then(data => getLeagueSeasons(data))
  .catch(err => {
    console.error(err);
  });
} 

const getLeagues = (league, year) => {
  const url = `https://api-football-standings.azharimm.site/leagues/${league}/standings?season=${year}&sort=asc` 
	return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
}


function clickListener(event) {
  const selected = event.target.innerHTML;
  console.log(selected);
}

const getLeagueSeasons = (league) => {
  const seasons = league.data.seasons;
  const row = document.createElement('tr');
  const leagueName = document.createElement('th');
  leagueName.innerHTML = league.data.name;
  row.appendChild(leagueName)
  tableSeasons.appendChild(row)
  seasons.forEach((season) => {
    const rowElement = document.createElement('td');
    rowElement.innerHTML = season.year;
    row.appendChild(rowElement)
    tableSeasons.appendChild(row)
    rowElement.addEventListener('click', clickListener);
  });
}

// function createRows() {
//   for(let i = 0; i < 20; i += 1) {
//     const rows = document.createElement('tr');
//     rows.className = 'linhas';
//     body.appendChild(rows);
//   }
// }
// createRows();

function createTable(status) {
  const header = document.querySelector('.values');
  const column = document.createElement('th');
  column.innerHTML = status;
  header.appendChild(column);
}

function createTeamsTable(values) {
  const rows = document.createElement('tr');
  rows.className = values.replace(/\s+/g, '')
  const team = document.createElement('td');
  team.innerHTML = values;
  rows.appendChild(team)
  body.appendChild(rows)
}

function getStandings(team) {
  const teams = document.querySelectorAll('tr')
  Array.from(teams).map((teamRow) => {
    if(teamRow.className === team.team.name.replace(/\s+/g, '')) {
      team.stats.forEach((stat) => {
        const standings = document.createElement('td');
        standings.innerHTML = stat.displayValue;
        teamRow.appendChild(standings)
      })
    }
  })
}

async function createStandings(league, getYear) {
  const request = await getLeagues(league, getYear);
  const standings = request['data'].standings;
  standings[0].stats.forEach((stat) => createTable(stat.displayName));
  standings.map((element) => {
    createTeamsTable(element.team.name)
    console.log(element)
    getStandings(element)
  });
}

getSeasons('eng.1');
createStandings('eng.1', '2020');
console.log(getLeagues('eng.1', '2020'));
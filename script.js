// const getSquadByName = async (championship, teamName) => {
// 	const url = `https://football98.p.rapidapi.com/${championship}/squadname/${teamName}`;
//   fetch(url, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "football98.p.rapidapi.com",
// 		"x-rapidapi-key": "b19a964cafmsh62a3c8356170df6p12d7fdjsn0bf25e356dd6"
// 	}
// })
// .then(response => response.json())
// .then(data =>  data)
// .catch(err => {
// 	console.error(err);
// });
// } 

const getSquads = (championship) => {
  const url = `https://football98.p.rapidapi.com/${championship}/squads` 
	fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "football98.p.rapidapi.com",
		"x-rapidapi-key": "b19a964cafmsh62a3c8356170df6p12d7fdjsn0bf25e356dd6"
	}
})
.then(response => response.json())
.then(data => getChampionship(data))
.catch(err => {
	console.error(err);
});
} 

const getScorers = (championship) => {
	const url = `https://football98.p.rapidapi.com/${championship}/scorers`;
	fetch(url, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "football98.p.rapidapi.com",
			"x-rapidapi-key": "eb1bf93565msha6a03a448e1a0d1p1ec5e2jsn65322cd8aa9d"
		}
	})
	.then((response) => response.json())
	.then((data) => data)
	.catch((error) => console.error(error));
}

// const getScorerName = (league, player) => {
// 	const url = `https://football98.p.rapidapi.com/${league}/scorername/${player}`;
// 	fetch(url, {
// 		"method": "GET",
// 		"headers": {
// 			"x-rapidapi-host": "football98.p.rapidapi.com",
// 			"x-rapidapi-key": "eb1bf93565msha6a03a448e1a0d1p1ec5e2jsn65322cd8aa9d"
// 		}
// 	})
// 	.then((response) => response.json())
// 	.then((data) => data)
// 	.catch((error) => console.error(error));
// }

const getChampionship = (league) => {
  const teams = Array.from(league)
  teams.forEach((team) => {
    console.log(team)
  })
}

getSquads('ligue1');
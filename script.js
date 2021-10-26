// Implemente suas HOF aqui
// const { getScorers, getScorerByName } = require(/fetch/getScorers);

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
	.then((data) => console.log(data))
	.catch((error) => console.error(error));
}

const getScorerByName = (championship, player) => {
	const url = `https://football98.p.rapidapi.com/${championship}/scorername/${player}`;
	fetch(url, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "football98.p.rapidapi.com",
			"x-rapidapi-key": "eb1bf93565msha6a03a448e1a0d1p1ec5e2jsn65322cd8aa9d"
		}
	})
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.error(error));
}

const getSquadByName = (championship, teamName) => {
	const url = `https://football98.p.rapidapi.com/${championship}/squadname/${teamName}`;
	fetch(url, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "football98.p.rapidapi.com",
			"x-rapidapi-key": "b19a964cafmsh62a3c8356170df6p12d7fdjsn0bf25e356dd6"
		}
	})
	.then(response => response.json())
	.then(data => {return data})
	.catch(error => console.error(error));
} 

const getSquads = (championship) => {
	const url = `https://football98.p.rapidapi.com/${championship}/squads`;
	fetch(url, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "football98.p.rapidapi.com",
			"x-rapidapi-key": "b19a964cafmsh62a3c8356170df6p12d7fdjsn0bf25e356dd6"
		}
})
	.then(response => response.json())
	.then(data => {return data})
	.catch(error => console.error(error));
}

getScorers('premierleague');
getScorerByName('premierleague', 'kane');

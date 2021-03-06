const getScorers = (championship) => {
	const url = `https://football98.p.rapidapi.com/${championship}/scorers`;
	fetch(url, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "football98.p.rapidapi.com",
			"x-rapidapi-key": "eb1bf93565msha6a03a448e1a0d1p1ec5e2jsn65322cd8aa9d"
		}
	})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));
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
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));
}

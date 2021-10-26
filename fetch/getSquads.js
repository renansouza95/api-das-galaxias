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

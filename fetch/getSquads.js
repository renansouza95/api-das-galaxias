const getSquadByName = (championship, teamName) => {
	fetch(`https://football98.p.rapidapi.com/${championship}/squadname/${teamName}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "football98.p.rapidapi.com",
		"x-rapidapi-key": "b19a964cafmsh62a3c8356170df6p12d7fdjsn0bf25e356dd6"
	}
})
.then(response => response.json())
.then(data => {return data})
.catch(err => {
	console.error(err);
});
} 

const getSquads = (championship) => {
	fetch(`https://football98.p.rapidapi.com/${championship}/squads`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "football98.p.rapidapi.com",
		"x-rapidapi-key": "b19a964cafmsh62a3c8356170df6p12d7fdjsn0bf25e356dd6"
	}
})
.then(response => response.json())
.then(data => {return data})
.catch(err => {
	console.error(err);
});
} 


if (typeof module !== 'undefined') {
  module.exports = {
    getSquadByName,
		getSquads,
  };
}

console.log('Yes promised');

var githubapi = fetch('https://api.github.com/users/Manii-dot', {headers: {'Authorization': gitHubToken}})
    .then((response)=>{
        console.log(response)
        return response.json()
    })
    .then(events =>
    console.log("the last commit was: ", events.updated_at))
;


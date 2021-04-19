console.log('Yes promised');
                                        // missed the event part of the url
var githubapi = fetch('https://api.github.com/users/Manii-dot', {headers: {'Authorization': gitHubToken}})
    .then((response)=>{
        console.log(response)
        return response.json()
    })
    .then(events =>
    console.log("the last commit was: ", events.updated_at))
;

// Another way to do this, Dauglas way that is_____

function getLastpushDates(githubUsername){
    let url = `https://api.github.com/users/${githubUsername}/events`;
    let githubRsponse = fetch(url,{headers:{'Authorization': `token${gitHubToken}`}});
    githubRsponse
        .then((response)=>{
            return response.json();
        })
        .then((githubEventData)=>{
            for(let githubEvent of githubEventData){
                if(githubEvent.type === "PushEvent"){
                    console.log(githubEvent.created_at);
                    return new Date(githubEvent.created_at)
                }
            }
        })
}

getLastpushDates("Manii-dot")
    .then((date)=>console.log(date));
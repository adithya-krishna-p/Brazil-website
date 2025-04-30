window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("team-logo").style.width = "40px";
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("team-logo").style.width = "60px";
  }
}

let NewsData = fetch("./news.json")
NewsData.then((response)=>response.json())
.then((data) => LoadNews(data));

function LoadNews(data){
  // console.log(data)
  var content = ""
  var NewsBox = document.getElementById("news-container") 
  for (let i=0;i<data.length;i++){
    content = content + '<div class="news-box col-lg-3 col-11">'+
                        '<img class="pt-3" src="'+data[i].image+'" alt="" height="300">'+
                        '<h3 class="pt-3">'+data[i].title+'</h3>'+
                        '<p class="text-secondary">'+data[i].description+'</p>'+
                  '</div>'
  }
  // console.log(content)
  NewsBox.innerHTML = content
}

let TeamData = fetch("./team.json")
TeamData.then((response)=>response.json())
.then((data) => LoadTeam(data));

function LoadTeam(data){
  var content = ""
  var players = ""
  var TeamBox = document.getElementById("team-container")
  for(let i =0;i<data.length;i++){
    let title = data[i].position
    content = content + '<div class="h1 text-secondary text-center pt-3">'+title+'</div>'+
                        '<div id="team-container" class="row gap-3 justify-content-center">'
    for(let j=0;j<data[i].players.length;j++){
      players = players + '<div class="player-card-container w-auto p-0">'+
                            '<div class="img-container px-4">'+
                                '<div class="img-box">'+
                                  '<img id="player-img" src="'+data[i].players[j].image+'" alt="">'+
                                '</div>'+
                            '</div>'+
                            '<div class="player-details text-center bg-white">'+
                              '<h1 class="m-0 pt-2 px-2">'+data[i].players[j].name+'</h1>'+
                              '<p class="text-secondary">'+data[i].players[j].club+'</p>'+
                            '</div>'+ 
                          '</div>'
    }
    content = content+players+'</div>'
    players = ""
  }
  TeamBox.innerHTML = content
}


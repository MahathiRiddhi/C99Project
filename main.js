function addUser(){
     var player1Name = document.getElementById("pl1name").value 
     var player2Name = document.getElementById("pl2name").value
     localStorage.setItem("pl1",player1Name)
     localStorage.setItem("pl2",player2Name)
     window.location="game_page.html"
}

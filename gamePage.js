var p1name = localStorage.getItem("pl1")
var p2name = localStorage.getItem("pl2")
var p1Score = 0
var p2Score = 0
var word = ""
var qusTurn = "Player1"
var ansTurn = "Player2"

document.getElementById("p1name").innerHTML = p1name
document.getElementById("p1score").innerHTML = p1Score
document.getElementById("p2name").innerHTML = p2name
document.getElementById("p2score").innerHTML = p2Score
document.getElementById("qus").innerHTML = "Question Turn : " + p1name
document.getElementById("ans").innerHTML = "Answer Turn : " + p2name

function send() {
    var getWord = document.getElementById("question").value
    word = getWord.toLowerCase()
    char1 = word.charAt(1)
    halfLength = Math.floor(word.length / 2)
    char2 = word.charAt(halfLength)
    char3 = word.charAt(word.length - 1)
    removeChar1 = word.replace(char1, "_")
    removeChar2 = removeChar1.replace(char2, "_")
    removeChar3 = removeChar2.replace(char3, "_")
    console.log(removeChar3)
    var qus = "<h4 id = 'qusWord'> question - " + removeChar3 + "</h4>"
    var ansBox = "<input id = 'answerBox' placeholder = 'TYPE YOUR ANSWER HERE'></input>"
    var checkbtn = "<br> <button class = 'btn btn-primary' onclick = 'check()'>check</button>"
    var output = qus + ansBox + checkbtn
    document.getElementById("output").innerHTML = output
    document.getElementById("question").value = ""
}

function check() {
    var getAns = document.getElementById('answerBox').value
    answer = getAns.toLowerCase()
    if (answer == word) {
        if (ansTurn == "Player1") {
            p1Score = p1Score + 1
            document.getElementById("p1Score").innerHTML = p1Score
        }
        if (ansTurn == "Player2") {
            p2Score = p2Score + 1
            document.getElementById("p2score").innerHTML = p2Score
        }
    }
    if (qusTurn == "Player1") {
        qusTurn = "Player2"
        ansTurn = "Player1"
        document.getElementById("qus").innerHTML = "Question Turn : " + p2name
        document.getElementById("ans").innerHTML = "Answer Turn : " + p1name
    }
    if(qusTurn == "Player2"){
        qusTurn = "Player1"
        ansTurn = "Player2"
        document.getElementById("qus").innerHTML = "Question Turn : " + p1name
        document.getElementById("ans").innerHTML = "Answer Turn : " + p2name
    }
    document.getElementById("output").innerHTML = ""

}
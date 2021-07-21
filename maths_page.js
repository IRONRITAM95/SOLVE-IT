player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0 ;
player2_score = 0 ;

document.getElementById("player1_name").innerHTML=player1_name + " : " ;
document.getElementById("player2_name").innerHTML=player2_name + " : " ;

document.getElementById("player1_score").innerHTML=player1_score ;
document.getElementById("player2_score").innerHTML=player2_score ;

document.getElementById("player_question").innerHTML="QUESTION TURN - " + player1_name ;
document.getElementById("player_answer").innerHTML="ANSWER TURN - " + player2_name ;

function send(){
    number1 = document.getElementById("no1").value ;
    number2 = document.getElementById("no2").value ;
    actual_answer = parseInt(number1) * parseInt(number2) ;

    question_word = "<h4 id='word_display'>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>ANSWER : <input type='text' id='input_check_box' placeholder='ANSWER HERE'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row ;  
    document.getElementById("no1").value = " " ; 
    document.getElementById("no2").value = " " ; 
}
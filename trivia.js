
var questionIndex = 0;
var currentQuestion = null;
var isQuestionAnswered = false;
var score = 1;
var correct = "correct!";
var incorrect = "incorrect!";
var questions = [{
    text: "Known for films such as Stand by Me and Running on Empty, this 80's teen idol's career fell short due to an early and unexpected death.",
    answers: ["Michael J Fox", "Ralph Macchio", "Corey Feldman","River Phoenix"],
    correct: "River Phoenix",
    hint: "Joaquin"
},

{
    text: "This lead actor earned his first academy award nomination for his role in the film A Street Car Named Desire",
    answers: ["Marlon Brando","Clark Gable","James Dean","James Cagney"],
    correct: "Marlon Brando",
    hint: "The Godfather"
},

{
    text: "In 1993, this film became the most successful film released, beating out the likes of E.T.  This record was later broken by the film Titanic.",
    answers: ["Speed","Forrest Gump","Jurrasic Park","The Lion King"],
    correct: "Jurrasic Park",
    hint: "Steven Spielberg"
},

{
    text: "Staring in roles such as Cleopatra and Cat on a Hot Tin Roof, this golden era star was known most for her one of a kind violet eyes.",
    answers: ["Vivien Leigh","Audrey Hepburn","Lauren Bacall","Elizabeth Taylor"],
    correct: "Elizabeth Taylor",
    hint: "7 husbands 8 marriages"

},

{
    text: "The name Holly Golightly names the lead character for which Golden Era film?",
    answers: ["Some Like It Hot","Breakfast at Tiffanys","Gone With the Wind","Casablanca"],
    correct: "Breakfast at Tiffanys",
    hint: "Diamonds!"
},

{
    text: "This 70's horror movie has been credited as the first in a long line of slasher films inspired by Alfred Hitchcock's Psycho.",
    answers: ["The Excorcist","Halloween","The Omen","Black Christmas"],
    correct: "Halloween",
    hint: "Haddonfield, Illinois"
},

{
    text: "This film, starring the legendary Whitney Houston and actor Kevin Costner, has the highest grossing soundtrack of all time selling 17 million copies.",
    answers: ["The Bodyguard","Cinderella","Waiting to Exhale","The Preachers Wife"],
    correct: "The Bodyguard",
    hint: "I Will Always Love You"
},

{
    text: "Judged the greatest film from 1983-2008 by Entertainment Weekly, this film earned Quentin Tarantino his first Academy Award.",
    answers: ["Natural Born Killers","Resevoir Dogs","Pulp Fiction","From Dusk til Dawn"],
    correct: "Pulp Fiction",
    hint: "Royale with cheese"
}];

function showCurrentQuestion(){
    currentQuestion = questions[questionIndex];
    $(".questions").text(currentQuestion.text)
    $("#a0").text(currentQuestion.answers[0])
    $("#a1").text(currentQuestion.answers[1])
    $("#a2").text(currentQuestion.answers[2])
    $("#a3").text(currentQuestion.answers[3])

    isQuestionAnswered = false;
    $("#help").text("")
    $("#correctness").text("")

}

function checkAnswer() {
    if (isQuestionAnswered) {
        return;
    }
    var submittedAnswer = $(this).text()
    if(submittedAnswer == currentQuestion.correct) {

        $("#score").text("score: " + score++)
        $("#correctness").text(correct)
        $("#correctness").css("color", "green")
    } else {
        $("#correctness").text(incorrect)
        $("#correctness").css("color", "red")
    }
    isQuestionAnswered = true;
    questionIndex++;
    if(questions.indexOf(currentQuestion) == questions.length - 1) {
        alert(`Your score is ${score}`)
        questionIndex = 0
        showCurrentQuestion()
    }

}

function helpMe(){
    $("#help").text(currentQuestion.hint)

}


$('#start').on('click', showCurrentQuestion)
$('.answer-button').on('click', checkAnswer)
$('#next').on('click', showCurrentQuestion)
$('#hint').on('click', helpMe)

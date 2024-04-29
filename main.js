// Magic 8 Ball CYU
document.getElementById("btn").addEventListener("click", btnClicked);

//When ball click this what it do
function btnClicked() {
  // Process
  let rand = Math.random();
  // Part A Random response
  let answer;

  if (rand < 0.2) {
    answer = "Without a Doubt.";
  } else if (rand < 0.4) {
    answer = "As I see it, yes.";
  } else if (rand < 0.6) {
    answer = "Concentrate and ask again.";
  } else if (rand < 0.8) {
    answer = "Don't count on it.";
  } else {
    answer = "Outlook not so good.";
  }

  // Part B Check the Question
  let question = document.getElementById("question-in").value;
  if (question == "Does a magic 8 ball actually work?") {
    answer = "How dare you doubt me!";
  } else if (question == "Is JavaScript awesome?") {
    answer = "Of Course!";
  } else {
  }

  // Output
  document.getElementById("output").innerHTML = `Answer: ${answer}`;
}

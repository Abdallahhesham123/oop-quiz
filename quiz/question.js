class Question {
  constructor(question) {
    this.questionsElement = document.querySelector("#questions");
    this.answerelements = [
      document.querySelector("#a1"),
      document.querySelector("#a2"),
      document.querySelector("#a3"),
      document.querySelector("#a4"),
    ];

    this.correctAnswer = question.correct_answer;
    this.question = question.question;
    this.isCorrect = false;
    this.answers = [this.correctAnswer, ...question.incorrect_answers];
    console.log(this.answers);
        console.log( this.correctAnswer);
        console.log(typeof(question.correct_answer));
  }

  answer(checkElement) {
    this.isCorrect = (checkElement[0].textContent === this.correctAnswer) ? true : false;
    console.log(this.isCorrect);
    console.log(checkElement[0].textContent);
    console.log(this.correctAnswer);
    //  console.log(question.correct_answer);

  }
  render() {
    this.questionsElement.innerHTML = this.question;
    this.answerelements.forEach((el, index) => {
      el.innerHTML = "<input type='radio' name='radio'>" + this.answers[index];
    });
  }
}
export default Question;
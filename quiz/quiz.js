import Final from "./final.js";
import Question from "./question.js";

class Quiz {
  constructor(quizElem, amount, questions) {
    this.quizElem = quizElem;

    this.currentElement = document.querySelector(
      ".container .quiz .count .current"
    );
    this.totalElement = document.querySelector(
      ".container .quiz .count .total"
    );
    this.finalElement = document.querySelector(".container .final");
    this.nextElementBtn = document.querySelector("#next");

    this.TotalAmount = amount;
    this.answeredAmount = 0;
      this.questions = this.setQuestion(questions);
      
      this.nextElementBtn.addEventListener("click", this.nextQuestion);
      this.renderQuestions();
  }

    setQuestion = (questions) => {
      
        return questions.map((question) => new Question(question));
  };
    renderQuestions = () => {
      
        this.questions[this.answeredAmount].render();
        this.currentElement.innerHTML = this.answeredAmount + 1;
        this.totalElement.innerHTML = this.TotalAmount;

  };

    nextQuestion = () => {
        const checkElement =
            this.questions[this.answeredAmount].answerelements
                .filter(el => el.firstChild.checked);
        if (checkElement.length == 0) {
            
            alert('you must choice answer')
        } else {
            this.questions[this.answeredAmount].answer(checkElement);
            this.answeredAmount++;
            this.answeredAmount < this.TotalAmount ? this.renderQuestions() : this.endQuizApp()

        }

  };
    endQuizApp = () => {
        this.quizElem.style.display = "none";
        this.finalElement.style.display = "block";
      const CorrectQuestions = this.countCorrectAnswers();
      console.log(CorrectQuestions);
        new Final(CorrectQuestions, this.TotalAmount);
  };
    countCorrectAnswers() {
      
        let count = 0;
        this.questions.forEach((ele) => {
            if (ele.isCorrect) {
              count++;
            }
            
        });
        return count;
  };
}

export default Quiz;
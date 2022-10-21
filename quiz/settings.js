//https://opentdb.com/api.php?amount=10&category=9&difficulty=easy
import Quiz from "./quiz.js";
class Settings {
  constructor() {
    this.settingDom = document.querySelector(".container .settings");
    this.quizDom = document.querySelector(".container .quiz");
    this.catDom = document.querySelector("#category");
    this.nquestionDom = document.getElementById("nquestions");
    this.startBtn = document.getElementById("startBtn");
    this.difficulty = [
      document.querySelector("#easy"),
      document.querySelector("#medium"),
      document.querySelector("#hard"),
    ];
    this.quiz={}
    this.startBtn.addEventListener("click", this.startQuizApp);
  }
  //function to start
    startQuizApp = async () => {
      
        try {
            const amount = this.getAmount();
            const category = this.catDom.value;
            const difficulty = this.getdifficult();    
            const url =
                `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;
            let { results } = await this.getdatafetching(url);
            console.log(results);
this.quiz = new Quiz(this.quizDom, amount, results);

            this.toggleElements();
        } catch (error) {
            alert(error);
        }


    // console.log('app started')
    };
    
    toggleElements = () => {
              this.quizDom.style.display = "block";
              this.settingDom.style.display = "none";

    }

    getdatafetching = async (url) => {
        
        const response = await fetch(url);
        const data = await response.json();
        
        return data
    }
    
    getAmount = () => {
        const amountQ = this.nquestionDom.value;
        if (amountQ > 0 && amountQ < 15) {
            return amountQ;
        } else {
            alert('Please enter number less than 15')
        }
    };
    
    getdifficult = () => {
        
        const difficult = this.difficulty.filter(el => el.checked);
        if (difficult.length === 1) {
            
            return difficult[0].id;
        } else {
            alert('please insert difficulty')
        }

    }
}
export default Settings;
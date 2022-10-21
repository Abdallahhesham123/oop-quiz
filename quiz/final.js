class Final {
  constructor(correctAnswers, totalAmount) {
    // this.correctAnswers = correctAnswers;
    this.totalAmount = totalAmount;
    this.scoreElement = document.querySelector(".score");
    this.againBtn = document.getElementById("again");
    this.againBtn.addEventListener("click", this.startAgain);
    this.render(correctAnswers, totalAmount);
  }

  startAgain = () => {
    location.reload();
  };
  render(correctAnswers, totalAmount) {
    this.scoreElement.innerHTML = `You Answered ${correctAnswers} out of ${totalAmount} Correct`;
  }
}

export default Final;
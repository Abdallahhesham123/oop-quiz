"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Question =
/*#__PURE__*/
function () {
  function Question(question) {
    _classCallCheck(this, Question);

    this.questionsElement = document.querySelector("#questions");
    this.answerelements = [document.querySelector("#a1"), document.querySelector("#a2"), document.querySelector("#a3"), document.querySelector("#a4")];
    this.correctAnswer = question.correct_answer;
    this.question = question.question;
    this.isCorrect = false;
    this.answers = [this.correctAnswer].concat(_toConsumableArray(question.incorrect_answers));
    console.log(this.answers);
    console.log(this.correctAnswer);
    console.log(_typeof(question.correct_answer));
  }

  _createClass(Question, [{
    key: "answer",
    value: function answer(checkElement) {
      this.isCorrect = checkElement[0].textContent === this.correctAnswer ? true : false;
      console.log(this.isCorrect);
      console.log(checkElement[0].textContent);
      console.log(this.correctAnswer); //  console.log(question.correct_answer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      this.questionsElement.innerHTML = this.question;
      this.answerelements.forEach(function (el, index) {
        el.innerHTML = "<input type='radio' name='radio'>" + _this.answers[index];
      });
    }
  }]);

  return Question;
}();

var _default = Question;
exports["default"] = _default;
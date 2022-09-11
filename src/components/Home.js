import React, { useEffect, useState } from "react";
import "../App.css";
import ButtonComponent from "./button_component";
import ValidationCountComponent from "./validation_count_component";
import QuestionComponent from "./question_component";

function App() {
  const [state, setState] = useState({
    question_1: 0,
    question_2: 0,
    answers: [0, 0, 0, 0],
    count: 0,
    operator: "+",
  });
  const [correct_count, setcorrect_count] = useState(0);
  const [incorrect_count, setincorrect_count] = useState(0);

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function generate_question() {
    let question_1 = Math.floor(Math.random() * 10);
    let question_2 = Math.floor(Math.random() * 10);
    let operator = ["*", "+", "/", "-"];
    let selectedOperator = shuffle(operator);
    console.log(selectedOperator[0]);
    let answer;
    switch (selectedOperator[0]) {
      case "+":
        answer = question_1 + question_2;
        break;
      case "*":
        answer = question_1 * question_2;
        break;
      case "/":
        answer = question_1 / question_2;
        break;
      case "-":
        answer = question_1 - question_2;
        break;
      default:
        console.log("Wrong");
    }
    let random_answer_1 = Math.floor(Math.random() * 100);
    let random_answer_2 = Math.floor(Math.random() * 100);
    let random_answer_3 = Math.floor(Math.random() * 100);
    let answers = [answer, random_answer_1, random_answer_2, random_answer_3];
    let count = state.count + 1;
    setState({
      question_1: question_1,
      question_2: question_2,
      answers: shuffle(answers),
      count: count,
      operator: selectedOperator[0],
    });
  }

  useEffect(() => {
    generate_question();
  }, []);

  function check_answer(answer, operator) {
    let userAnswer;
    switch (operator) {
      case "+":
        userAnswer = state.question_1 + state.question_2;
        break;
      case "*":
        userAnswer = state.question_1 * state.question_2;
        break;
      case "/":
        userAnswer = state.question_1 / state.question_2;
        break;
      case "-":
        userAnswer = state.question_1 - state.question_2;
        break;
      default:
        console.log("Wrong");
    }
    if (userAnswer == answer) {
      setcorrect_count(correct_count + 1);
      console.log("correct:", correct_count);
    } else {
      setincorrect_count(incorrect_count + 1);
      console.log("Incorrect:", incorrect_count);
    }
    generate_question();
  }

  return (
    <div>
      <div>
        <div>
          <div className="row text-center">
            <div className="col" style={{ fontSize: "30px" }}>
              Quiz
            </div>
          </div>
          {state.count <= 20 ? (
            <div>
              <div>
                <br></br>
                <div className="row mx-auto">
                  <div className="col">
                    <ValidationCountComponent
                      name="Correct"
                      count={correct_count}
                    />
                  </div>
                  <div className="col">
                    <ValidationCountComponent
                      name="Incorrect"
                      count={incorrect_count}
                    />
                  </div>
                </div>
                <br></br>
                <div className="row text-center">
                  <div className="col ">
                    <QuestionComponent
                      question_1={state.question_1}
                      question_2={state.question_2}
                      answer={state.answer}
                      operator={state.operator}
                    />
                  </div>
                </div>
                <br></br>
                <div className="row text-center">
                  <div className="col">
                    {" "}
                    <ButtonComponent
                      answer={state.answers[0]}
                      check_answer={() =>
                        check_answer(state.answers[0], state.operator)
                      }
                    />
                  </div>
                  <div className="col">
                    {" "}
                    <ButtonComponent
                      answer={state.answers[1]}
                      check_answer={() =>
                        check_answer(state.answers[1], state.operator)
                      }
                    />
                  </div>
                  <div className="col">
                    <ButtonComponent
                      answer={state.answers[2]}
                      check_answer={() =>
                        check_answer(state.answers[1], state.operator)
                      }
                    />
                  </div>
                  <div className="col">
                    {" "}
                    <ButtonComponent
                      answer={state.answers[3]}
                      check_answer={() =>
                        check_answer(state.answers[3], state.operator)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <strong>Score </strong>: {correct_count}/20{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

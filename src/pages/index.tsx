import { use, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);
  const [result, setResult] = useState(false);
  const [passing, setPassing] = useState('');

  function calculate() {
    if (score >= 5) {
      setPassing('congrats you know the basics of conception');
    } else if (score == 4) {
      setPassing('there is a good chance that you will have unplanned kids in the future');
    } else if (score < 4) {
      setPassing('please do not have sex cuz you are a danger');
    }
  }


  const [score, setScore] = useState(0);

  return (
    <>
      <main
        className="df aic jcc main_quiz">
          {startQuiz === false &&
            <div className="hero">
              <h1>want to see how likely you are to NOT have unplanned kids?</h1>
            <button
              onClick={() => { 
                setStartQuiz(true);
                setQuestion1(true)}
                }>sure i guess</button>
          </div>
          }

          {question1 === true && (
            <div className="question">
              <h2>question 1</h2>
              <p>it's ok to sometimes not take the birth control pill as long as you make up for it by taking more the next day?</p>
              <div className="df aic jcsb">
                <button onClick={() => {
                  setScore(score - 1)
                  setQuestion1(false);
                  setQuestion2(true);
                }}>false</button>
                <button onClick={() => {
                  setScore(score + 1)
                  setQuestion1(false);
                  setQuestion2(true);
                }}>true</button>
              </div>
            </div>
          )}

          {question2 === true && (
            <div className="question">
              <h2>question 2</h2>
              <p>do you or your partner rely on 'pulling out' in order to not get pregnant?</p>
              <div className="df aic jcsb">
                <button onClick={() => {
                  setScore(score + 1)
                  setQuestion2(false);
                  setQuestion3(true);
                }}>no</button>
                <button onClick={() => {
                  setScore(score - 1)
                  setQuestion2(false);
                  setQuestion3(true);
                }}>yes</button>
              </div>
            </div>
          )}

        {question3 === true && (
            <div className="question">
              <h2>question 3</h2>
              <p>it's ok to use condoms that have been opened previously?</p>
              <div className="df aic jcsb">
                <button onClick={() => {
                  setScore(score + 1)
                  setQuestion3(false);
                  setQuestion4(true);
                }}>no</button>
                <button onClick={() => {
                  setScore(score - 1)
                  setQuestion3(false);
                  setQuestion4(true);
                }}>yes</button>
              </div>
            </div>
          )}


        {question4 === true && (
            <div className="question">
              <h2>question 4</h2>
              <p>do you rely mostly on tracking you or your partners cycle?</p>
              <div className="df aic jcsb">
                <button onClick={() => {
                  setScore(score + 1)
                  setQuestion4(false);
                  setQuestion5(true);
                }}>no</button>
                <button onClick={() => {
                  setScore(score - 1)
                  setQuestion4(false);
                  setQuestion5(true);
                }}>yes</button>
              </div>
            </div>
          )}

          {question5 === true && (
            <div className="question">
              <h2>question 5</h2>
              <p>do you or your partner believe that getting pregant on the first time is not possible?</p>
              <div className="df aic jcsb">
                <button onClick={() => {
                  setScore(score + 1)
                  setQuestion5(false);
                  setQuestion6(true);
                }}>no</button>
                <button onClick={() => {
                  setScore(score - 1)
                  setQuestion5(false);
                  setQuestion6(true);
                }}>yes</button>
              </div>
            </div>
          )}

        {question6 === true && (
            <div className="question">
              <h2>question 6</h2>
              <p>do you or your partner believe that getting pregant on the first time is not possible?</p>
              <div className="df aic jcsb">
                <button onClick={() => {
                  setScore(score + 1)
                  setQuestion6(false);
                  setResult(true);
                  calculate();
                }}>no</button>
                <button onClick={() => {
                  setScore(score - 1)
                  setQuestion6(false);
                  setResult(true);
                  calculate();
                }}>yes</button>
              </div>
            </div>
          )}

          {result == true && (
            <div>
              <h1>results</h1>
              <p>{passing}</p>
            </div>
          )}
      </main>
    </>
  )
}

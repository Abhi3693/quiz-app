import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Result(props) {
  let arr = Array(10).fill(1);
  if (!props.answers || !props.questions) return null;

  let countAnswer = 0;
  arr.forEach((qus, i) => {
    if (props.questions[i].correct_answer === props.answers[i]) {
      countAnswer++;
    }
  });
  return (
    <div className='result'>
      <h2 className='total-score'>Total Score: {countAnswer}</h2>
      <table>
        <thead>
          <tr>
            <th>Qus.no</th>
            <th>Question</th>
            <th>Currect Answer</th>
            <th>Your Answer</th>
            <th>Result</th>
          </tr>
        </thead>
        {arr.map((question, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{props.questions[index].question}</td>
                <td>{props.questions[index].correct_answer}</td>
                <td>{props.answers[index]}</td>
                <td>
                  {props.questions[index].correct_answer ===
                  props.answers[index] ? (
                    <FaCheckCircle className='correct-ans' />
                  ) : (
                    <FaTimesCircle className='wrong-ans' />
                  )}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <Link to='/' className='submit-quiz'>
        Home
      </Link>
    </div>
  );
}

export default Result;

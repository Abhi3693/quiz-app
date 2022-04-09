import React from 'react';
import Loading from './Loading';
// import { Link, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestionIndex: 0,
      options: [],
      allAnswers: [],
      selectedAnswer: null,
      error: false,
      allDone: false,
    };
  }

  componentDidMount() {
    this.getQuestions();
    this.updateLocalStorage();
  }

  handleAnswer = (val) => {
    this.setState({ selectedAnswer: val });
  };

  componentDidUpdate(prevProps) {
    this.updateLocalStorage();
  }

  updateLocalStorage = () => {
    localStorage.setItem('quiz', JSON.stringify(this.state));
  };

  getQuestions = () => {
    let { category, difficulty } = this.props.state;
    if (!category || !difficulty) return null;
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
    )
      .then((res) => res.json())
      .then((questions) => {
        this.getAllOptions(questions.results, this.state.currentQuestionIndex);
        this.setState({
          questions: questions.results,
          options: this.getAllOptions(questions.results, 0),
        });
      });
  };

  getAllOptions = (questions, index) => {
    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }
    let currentQus = questions[index];
    let inCorrectAns = [...currentQus.incorrect_answers];
    let allOptions = inCorrectAns.concat(currentQus.correct_answer);
    return shuffle(allOptions);
  };

  handleNext = () => {
    let {
      questions,
      currentQuestionIndex,
      selectedAnswer,
      allAnswers,
      options,
    } = this.state;
    if (!selectedAnswer) return this.setState({ error: true });
    if (currentQuestionIndex + 1 < questions.length) {
      currentQuestionIndex = currentQuestionIndex + 1;
      allAnswers = allAnswers.concat(selectedAnswer);
      selectedAnswer = null;
      options = this.getAllOptions(questions, currentQuestionIndex);
    }

    this.setState({
      questions,
      currentQuestionIndex,
      selectedAnswer,
      allAnswers,
      options,
      error: false,
    });
  };

  render() {
    let index = this.state.currentQuestionIndex;
    if (!this.props.state.category || !this.props.state.difficulty)
      return (
        <div className='error hieght-60vh'>
          <h1 className='err-heading'>
            Select Appropriate Category and Difficulty of Quiz
          </h1>
          <Link to='/'>
            <button className='back'>Back</button>
          </Link>
        </div>
      );
    if (!this.state.questions.length) return <Loading />;
    return (
      <div className='question'>
        <div className='quiz-top'>
          <span className='question-number'>Question {index + 1}/10</span>
          <div className='question-range-holder'>
            <div
              className='question-range'
              style={{
                width: `${(index + 1) * 10}%`,
              }}
            ></div>
          </div>
        </div>
        <h1 className='qus-name'>{this.state.questions[index].question}</h1>
        <ol>
          {this.state.options.map((option, i) => {
            return (
              <li
                onClick={() => this.handleAnswer(option)}
                key={i}
                className={
                  this.state.selectedAnswer === option
                    ? 'selected options'
                    : ' options'
                }
              >
                {option}
              </li>
            );
          })}
        </ol>
        {this.state.error ? (
          <h3 className='error'>You should select one option</h3>
        ) : (
          ''
        )}
        {this.state.questions.length === this.state.allAnswers.length + 1 ? (
          <div>
            <button
              className='next'
              onClick={() =>
                this.props.handleSubmitQuiz(
                  this.state.questions,
                  this.state.allAnswers,
                  this.state.selectedAnswer
                )
              }
            >
              Submit Quiz
            </button>
          </div>
        ) : (
          <button className='next' onClick={this.handleNext}>
            Next
          </button>
        )}
        {this.props.state.questions.length &&
        this.props.state.allAnswers.length ? (
          <Link key={'result'} to='/result' className='submit-quiz'>
            Result
          </Link>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Quiz;

import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Dashboard from './DashBoard';
import Quiz from './Quiz';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Result from './Result';
import NotFound from './NotFound';
import { Navigate } from 'react-router-dom';

import Wrapper from './Wrapper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      difficulty: null,
      questions: [],
      allAnswers: [],
    };
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value, questions: [], allAnswers: [] });
  };

  handleSubmitQuiz = (qus, allAnswers, curresntAns) => {
    allAnswers = allAnswers.concat(curresntAns);
    this.setState({ questions: qus, allAnswers });
    <Navigate to='/result' />;
  };

  hnadleReset = () => {
    <Navigate to='/' />;
    this.setState({
      category: null,
      difficulty: null,
      questions: [],
      allAnswers: [],
    });
  };

  render() {
    return (
      <div className=''>
        <Router>
          <Header />
          <Routes>
            <Route
              path='/'
              element={
                <Dashboard
                  state={this.state}
                  handleChange={this.handleChange}
                />
              }
            />
            <Route
              path='/quiz'
              element={
                <Quiz
                  state={this.state}
                  handleSubmitQuiz={this.handleSubmitQuiz}
                />
              }
            />
            <Route
              path='/result'
              element={
                <Result
                  questions={this.state.questions}
                  answers={this.state.allAnswers}
                  handleReset={this.hnadleReset}
                />
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;

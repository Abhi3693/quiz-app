import React from 'react';
import Loading from './Loading';
import { Link } from 'react-router-dom';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCategories: null,
    };
  }

  componentDidMount() {
    fetch('https://opentdb.com/api_category.php')
      .then((res) => res.json())
      .then((data) => this.setState({ allCategories: data.trivia_categories }));
  }

  render() {
    let difficulty = ['easy', 'medium', 'hard'];
    if (!this.state.allCategories) return <Loading />;
    return (
      <div className='hieght-60vh'>
        <form className=' form-category'>
          <h1 className='form-heading'>Quiz Type</h1>
          <div className='flex gap-2 category-difficulty-holder '>
            <div>
              <h2 className='form-subHeading'>Select Category of Questions</h2>
              <select
                onChange={this.props.handleChange}
                name='category'
                className='category'
              >
                <option key='category'>Category</option>
                {this.state.allCategories.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <h2 className='form-subHeading'>
                Select Difficulty of Questions
              </h2>
              <select
                onChange={this.props.handleChange}
                name='difficulty'
                className='difficulty'
              >
                <option key='level'>Difficulty Level</option>
                {difficulty.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {this.props.state.category && this.props.state.difficulty ? (
            <Link to='/quiz' className='submit'>
              Submit
            </Link>
          ) : (
            ''
          )}
        </form>
      </div>
    );
  }
}

export default Dashboard;

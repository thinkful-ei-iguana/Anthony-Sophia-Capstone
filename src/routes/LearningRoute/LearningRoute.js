import React, { Component } from 'react';
import './LearningRoute.css';
import LangaugeService from '../../services/learnjpn-api-service';
import UserContext from '../../contexts/UserContext';

class LearningRoute extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      word: {}
    };
  }

  componentDidMount() {
    LangaugeService.getWord().then(res => {
      this.setState({ word: res });
    });
  }

  onSubmit = ev => {
    ev.preventDefault();
    const { guess } = ev.target;
    LangaugeService.processGuess(guess.value)
      .then(response => {
        this.context.setGuessData(response);
      })
      .then(this.props.history.push('/Results'));
  };

  handleNextButton = () => {
    this.setState({
      isCorrect: null
    });
  };

  render() {
    return (
      <section className='Learn-Words'>
        <h4>{this.state.word.currentWord}</h4>
        <div className='Word-Card'>
          <ul className='Card'>
            <li className='left'>
              Incorrect: {this.state.word.wordIncorrectCount}
            </li>
            <li className='right'>
              Correct: {this.state.word.wordCorrectCount}
            </li>
          </ul>
          <h5>Translate the word</h5>
          <form className='Translation-Form' onSubmit={this.onSubmit}>
            <input type='text' name='guess' />
            <button type='submit'>submit</button>
          </form>
          <h6>Total correct attempts: {this.state.word.totalScore}</h6>
        </div>
      </section>
    );
  }
}

export default LearningRoute;

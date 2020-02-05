import React, { Component } from 'react';
import './LearningRoute.css';
import LangaugeService from '../../services/learnjpn-api-service';

class LearningRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: {},
      comparedValues: {},
      isCorrect: null,
      correct: 0,
      incorrect: 0,
      totalScore: 0,
      nextWord: '',
      guess: '',
      answer: ''
    };
  }

  componentDidMount() {
    LangaugeService.getWord().then(res => {
      this.setState({ word: res })
      console.log(res);
    });
  }

  onSubmit = ev => {
    ev.preventDefault();
    const { guess } = ev.target;
    LangaugeService.processGuess(guess.value).then(response => {
      this.setState({
        isCorrect: response.isCorrect,
        correct: response.wordCorrectCount,
        incorrect: response.wordIncorrectCount,
        totalScore: response.totalScore,
        nextWord: response.nextWord,
        guess: response.guess,
        answer: response.answer
      })
    }
    );
  };

  handleNextButton = () => {
    this.setState({
      isCorrect: null,
    })
  }


  render() {
    let renderLearnPage;

    if (this.state.isCorrect === true) {
      renderLearnPage =
        <div>
          <h2>You were correct!</h2>
          <div className="feedback">
            <p>
              The correct translation for {this.state.comparedValues.nextWord} was {this.state.comparedValues.answer}
              and you guessed {this.state.comparedValues.guess}!
          </p>
          </div>
          <button>Try another word!</button>
        </div>

    } if (this.state.isCorrect === false) {
      renderLearnPage =
        <div>
          <div>
            <h2>Good try, but not quite right</h2>
            <div className="feedback">
              <p>
                The correct translation for {this.state.word.nextWord} was {this.state.comparedValues.answer}
                and you guessed {this.state.comparedValues.guess}!
          </p>
            </div>
            <button onClick={this.handleNextButton()}>Try another word!</button>
          </div>
        </div>
    } else {
      renderLearnPage = <div>
        <h4>{this.state.word.nextWord}</h4>
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
      </div>
    }

    return (
      <section className='Learn-Words'>
        {renderLearnPage}
      </section>
    );
  }
}

export default LearningRoute;

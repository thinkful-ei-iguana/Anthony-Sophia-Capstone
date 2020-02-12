import React from 'react';
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Results.css';

export default class Result extends React.Component {
  static contextType = UserContext;

  render() {
    const answerCheck = () => {
      if (this.context.guessData.isCorrect === true) {
        return (
          <div aria-live="polite" className='Correct'>
            <h2>You were correct!</h2>
            <div className='feedback'>
              <p>
                The correct translation for {this.context.guessData.currentWord}{' '}
                was {this.context.guessData.answer} and you guessed{' '}
                {this.context.guessData.guess}!
              </p>
            </div>
            <Link to={'/learn'} className='next-button'>
              <Button className='submit'>Try another word!</Button>
            </Link>
          </div>
        );
      }
      if (this.context.guessData.isCorrect === false) {
        return (
          <div>
            <div aria-live="polite" className='Wrong'>
              <h2>Good try, but not quite right</h2>
              <div className='feedback'>
                <p>
                  The correct translation for{' '}
                  {this.context.guessData.currentWord} was{' '}
                  {this.context.guessData.answer} and you guessed{' '}
                  {this.context.guessData.guess}!
                </p>
              </div>
              <Link to={'/learn'} className='next-button'>
                <Button className='submit'>Try another word!</Button>
              </Link>
            </div>
          </div>
        );
      }
    };

    return <div className='Results-Page'>{answerCheck()}</div>;
  }
}

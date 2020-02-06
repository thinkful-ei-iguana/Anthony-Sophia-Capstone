import React from 'react';
import UserContext from '../../contexts/UserContext';

export default class Result extends React.Component {
  static contextType = UserContext;

  render() {
    const answerCheck = () => {
      if (this.context.guessData.isCorrect === true) {
        return (
          <div>
            <h2>You were correct!</h2>
            <div className='feedback'>
              <p>
                The correct translation for {this.context.guessData.nextWord}{' '}
                was {this.context.guessData.answer}
                and you guessed {this.context.guessData.guess}!
              </p>
            </div>
            <button>Try another word!</button>
          </div>
        );
      }
      if (this.context.guessData.isCorrect === false) {
        return (
          <div>
            <div>
              <h2>Good try, but not quite right</h2>
              <div className='feedback'>
                <p>
                  The correct translation for {this.context.guessData.nextWord}{' '}
                  was {this.context.guessData.answer}
                  and you guessed {this.context.guessData.guess}!
                </p>
              </div>
              <button onClick={this.handleNextButton}>Try another word!</button>
            </div>
          </div>
        );
      }
    };

    return <div className='Result-Page'>{answerCheck()}</div>;
  }
}

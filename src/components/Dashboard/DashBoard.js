import React, { Component } from 'react';
import './Dashboard.css';
import Button from '../Button/Button'

class Dashboard extends Component {
    render() {
        return (
            <section className="dashboard">
                <h3 className='total-score-status'>Total Score: 100</h3>
                <h1 className='language-title'>Learning Japanese</h1>
                <Button className="submit">
                    Start Practicing </Button>
                <div className="word-container">
                    <h3 className="language-sub-header">Words to Practice</h3>
                    <ul className="word-list">
                        <li className="jpn-word">Mizu
                            <ul className="word-list-status">
                                <li className="correct-count">Correct: 1</li>
                                <li className="incorrect-count">InCorrect: 1</li>
                            </ul>
                        </li>
                        <li className="jpn-word">Yume
                            <ul className="word-list-status">
                                <li className="correct-count">Correct: 1</li>
                                <li className="incorrect-count">InCorrect: 1</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Dashboard
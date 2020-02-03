import React, { Component } from 'react';
import './Dashboard.css';

class DashboardList extends Component {


    render() {
        const words = this.props.words

        const wordsList = words.map(word => {
            return (
                <ul className="word-list">
                    <li className="jpn-word">{word.original}
                        <ul className="word-list-status">
                            <li className="correct-count">Correct: {word.correct_count}</li>
                            <li className="incorrect-count">Incorrect: {word.incorrect_count}</li>
                        </ul>
                    </li>
                </ul>
            )
        })

        return (
            <div className="word-container">
                <h3 className="language-sub-header">Words to Practice</h3>
                {wordsList}
            </div>
        );
    }
}

export default DashboardList
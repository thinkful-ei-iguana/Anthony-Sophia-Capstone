import React, { Component } from 'react';
import './Dashboard.css';

class DashboardList extends Component {


    render() {
        const words = this.props.words

        const wordsList = words.map(word => {
            return (
                <li className="word-list">
                    <h4 className="jpn-word">{word.original}</h4>
                    <ul className="word-list-status">
                        <li className="correct-count">correct answer count: {word.correct_count}</li>
                        <li className="incorrect-count">incorrect answer count: {word.incorrect_count}</li>
                    </ul>
                </li>
            )
        })

        return (
            <section className="word-container">
                <h3 className="language-sub-header">Words to practice</h3>
                {wordsList}
            </section>
        );
    }
}

export default DashboardList
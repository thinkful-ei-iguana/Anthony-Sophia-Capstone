import React, { Component } from 'react';
import DashboardList from './DashBoardList'
import { Link } from 'react-router-dom'
import './Dashboard.css';
import Button from '../Button/Button'

class Dashboard extends Component {


    render() {
        return (
            <section className="dashboard">
                <h2 className='total-score-status'>Total correct answers: {this.props.language.total_score}</h2>
                <h2 className='language-title'>{this.props.language.name}</h2>
                <Link to={'/learn'} className="practice-button">
                    <Button className="submit">Start practicing</Button>
                </Link>
                <DashboardList words={this.props.words} />
            </section>
        );
    }
}

export default Dashboard
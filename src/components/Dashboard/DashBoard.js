import React, { Component } from 'react';
import DashboardList from './DashBoardList'
import { Link } from 'react-router-dom'
import './Dashboard.css';
import Button from '../Button/Button'

class Dashboard extends Component {


    render() {
        return (
            <section className="dashboard">
                <h3 className='total-score-status'>Total Score: {this.props.language.total_score}</h3>
                <h1 className='language-title'>{this.props.language.name}</h1>
                <Link to={'/learn'} className="practice-button">
                    <Button className="submit">
                        Start Practicing </Button>
                </Link>
                <DashboardList words={this.props.words} />
            </section>
        );
    }
}

export default Dashboard
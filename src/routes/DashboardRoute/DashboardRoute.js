import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/DashBoard'
import LearnJpnApiService from '../../services/learnjpn-api-service'

class DashboardRoute extends Component {

  state = {
    language: {},
    words: []
  }

  componentDidMount() {
    LearnJpnApiService.getLanguage()
      .then(response => {
        this.setState({
          language: response.language,
          words: response.words
        })
      })
      .catch(error => {
        console.error({ error })
      })
  }



  render() {
    return (
      <Dashboard
        language={this.state.language}
        words={this.state.words}
      />
    );
  }
}

export default DashboardRoute

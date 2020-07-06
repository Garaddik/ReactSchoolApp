import React, { Component } from "react"
import DashboardMenu from './DashboardMenu'
import './DashboardTemplate.css'
import { Redirect } from 'react-router-dom'
import DashboardFooterConnector from "../../../../connectors/DashboardFooterConnector"
import DashboardHeaderConnector from "../../../../connectors/DashboardHeaderConnector"

class DashboardTemplate extends Component {
  render() {
    if (this.props.token.id_token === undefined) {
      return (
        <Redirect to="/" />
      )
    } else {
      return (
        <div>
          <DashboardHeaderConnector />
          <div className="ui grid">
            <div className="three wide column">
              <DashboardMenu />
            </div>
            <div className="twelve wide stretched column">
              <div className="ui segment dashboard-body-content">
                {this.props.children}
              </div>
            </div>
          </div>
          <DashboardFooterConnector />
        </div>
      )
    }
  }
}
export default DashboardTemplate

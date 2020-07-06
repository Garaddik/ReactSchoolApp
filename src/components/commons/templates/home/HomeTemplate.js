import React,{Component} from "react"
import HomeHeaderConnector from '../../../../connectors/HomeHeaderConnector'
import HomeFooterConnector from '../../../../connectors/HomeFooterConnector'
import './HomeTemplate.css'

class HomeTemplate extends Component {
    render() {
      return (
        <div>
          <HomeHeaderConnector/>
            <div className="home-body-content">
              {this.props.children}
            </div>
          <HomeFooterConnector/>
        </div>
      )
    }
  }
export default HomeTemplate

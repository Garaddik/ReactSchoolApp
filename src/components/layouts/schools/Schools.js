import React, { Component } from 'react'
import './Schools.css'
import School from './School'
import PropTypes from 'prop-types'


class Schools extends Component {

  render() {
    const schools = this.props.schools
    return (
      <div className="home-schools-css">
        <div className="three column stackable doubling ui grid card-layout">
          {schools.length !== 0 && schools.map((school, idx) => {
            return (
              <div  key={idx}  className="column">
                <School school={school} dispatch={this.props.dispatch} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

Schools.propTypes = {
  schools: PropTypes.array,
  error: PropTypes.object,
  children: PropTypes.object
}

export default Schools

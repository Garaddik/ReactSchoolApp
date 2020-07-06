import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './Home.css'

class StudentCarousel extends Component{ 

  render () {
    return(
        <Carousel
            dynamicHeight
            width='25%'
            autoPlay
            interval={3000}
            swipeable
            infiniteLoop
        >
            <div>
                <img alt='' src="/assets/images/StudentInbox.png" />
                <p className="legend">Check out your messages from the school or the teacher</p>
            </div>
            <div>
                <img alt='' src="assets/images/StudentAttendance.png" />
                <p className="legend">Check out your kids' attendance for the whole year</p>
            </div>
            <div>
                <img alt='' src="assets/images/StudentOptions.png" />
                <p className="legend">Check out the pictures of the events anytime you want</p>
            </div>
            <div>
                <img alt='' src="assets/images/StudentTimetable.png" />
                <p className="legend">Have the class and exam timetable always handy in your phone</p>
            </div>
            <div>
                <img alt='' src="assets/images/StudentResults.png" />
                <p className="legend">Say good bye to physical marks sheet and say hello the digital one which is instant and the way you want it</p>
            </div>
            <div>
                <img alt='' src="assets/images/StudentMap.png" />
                <p className="legend">Track your kids' bus in real time</p>
            </div>
        </Carousel>
    )
  }
}

StudentCarousel.propTypes = {
    schools:PropTypes.array,
    dispatch: PropTypes.func,
    actions: PropTypes.object
}

export default StudentCarousel
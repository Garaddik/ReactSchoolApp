import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './Home.css'

class WebAppCarousel extends Component{ 

  render () {
    return(
        <Carousel
            width='70%'
            dynamicHeight={true}
            autoPlay
            interval={3000}
            swipeable
            infiniteLoop
        >
            <div>
                <img alt='' src="/assets/images/Dashboard.png" />
                <p className="legend">The dashboard where you have all your school related information saved</p>
            </div>
            <div>
                <img alt='' src="assets/images/Notification.png" />
                <p className="legend">Notify students at once or standard wise, notify staff, send attachments and more</p>
            </div>
            <div>
                <img alt='' src="assets/images/Standards.png" />
                <p className="legend">Have your standards named in the format that you like</p>
            </div>
            <div>
                <img alt='' src="assets/images/Subjects.png" />
                <p className="legend">Add all your subjects at once taught in your institution</p>
            </div>
            <div>
                <img alt='' src="assets/images/Students.png" />
                <p className="legend">List and import all your students, promote students at a click, and check your previous years' students</p>
            </div>
            <div>
                <img alt='' src="assets/images/Attendance.png" />
                <p className="legend">Check out every standard's attendance at a click of a button</p>
            </div>
            <div>
                <img alt='' src="assets/images/Timetable.png" />
                <p className="legend">Set the timetable once and staff and students are updated the moment its uploaded</p>
            </div>
            <div>
                <img alt='' src="assets/images/Exams.png" />
                <p className="legend">Set the timetable once and staff and students are updated the moment its uploaded</p>
            </div>
            <div>
                <img alt='' src="assets/images/Results.png" />
                <p className="legend">Set the timetable once and staff and students are updated the moment its uploaded</p>
            </div>
            <div>
                <img alt='' src="assets/images/BusTracking.png" />
                <p className="legend">Track all your busses in real time</p>
            </div>
        </Carousel>
    )
  }
}

WebAppCarousel.propTypes = {
    schools:PropTypes.array,
    dispatch: PropTypes.func,
    actions: PropTypes.object
}

export default WebAppCarousel
  
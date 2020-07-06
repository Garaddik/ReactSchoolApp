import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

class StaffAppCarousel extends Component{ 

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
                <img alt='' src="/assets/images/StaffInbox.png" />
                <p className="legend">The dashboard where you have all your school related information saved</p>
            </div>
            <div>
                <img alt='' src="assets/images/StaffAttendance.png" />
                <p className="legend">Notify students at once or standard wise, notify staff, send attachments and more</p>
            </div>
            <div>
                <img alt='' src="assets/images/StaffMessage.png" />
                <p className="legend">Have your standards named in the format that you like</p>
            </div>
            <div>
                <img alt='' src="assets/images/StaffTimetable.png" />
                <p className="legend">Add all your subjects at once taught in your institution</p>
            </div>
            <div>
                <img alt='' src="assets/images/StaffResults.png" />
                <p className="legend">List and import all your students, promote students at a click, and check your previous years' students</p>
            </div>
            <div>
                <img alt='' src="assets/images/StaffMaps.png" />
                <p className="legend">Check out every standard's attendance at a click of a button</p>
            </div>
        </Carousel>
    )
  }
}

StaffAppCarousel.propTypes = {
    schools:PropTypes.array,
    dispatch: PropTypes.func,
    actions: PropTypes.object
}

export default StaffAppCarousel
import React, {Component} from 'react'
import StandardSelection from '../../../connectors/timetable/StandardSelection'


class WrapperTimetable extends Component{
    render(){
        return(
            <div>
                <StandardSelection/>
            </div>
        )
    }
}

export default WrapperTimetable
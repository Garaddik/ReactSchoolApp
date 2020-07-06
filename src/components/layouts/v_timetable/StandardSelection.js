import React, { Component } from 'react'
import AssociateStaff from '../../../connectors/timetable/AssociateStaff'
import {SSS} from '../../../actions/actionType'

class StandardSelection extends Component {

    constructor(props) {
        super(props)
        this.state ={
            selectedStandardId: 0
        }
        this.selectStandard = this.selectStandard.bind(this)
    }

    selectStandard = (event) => {
        
        const {dispatch} = this.props

        if(event.target.value === 0){
            dispatch({
                type: SSS,
                sss: []
            })
        }
        /*if (event.target.value != 0) {
            const { actions, dispatch, school } = this.props
            dispatch(actions.createTimetable_v2(school.schoolId, event.target.value))
        }*/

        this.setState({
            selectedStandardId: event.target.value
        })
    }

    componentDidMount() {
        const { actions, dispatch, school } = this.props
        dispatch(actions.allStandards(school.schoolId))
    }

    render() {
        const { standards } = this.props

        const {selectedStandardId} = this.state

        return (
            <div>
                <h3 className='ui dividing header'> Staff Subject association </h3>
                <form className='ui form' name='form-data'>
                    <div className='field'>
                        <div className='four fields'>
                            <div className="five wide field">
                                <label style={{ lineHeight: '2.5em' }}>Select Standard</label>
                            </div>
                            <div className="five wide field">
                                <select onChange={this.selectStandard} value={this.state.selectedStandardId} className="ui dropdown ui compact menu ">
                                    <option value={0} >Standards</option>
                                    {standards && standards.map(function (standard, id) {
                                        return (
                                            <option key={id} value={standard.standardId}>{standard.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
                <AssociateStaff standardId = {selectedStandardId} />
            </div>
        )
    }
}

export default StandardSelection

import React, { Component } from 'react'
import AssociateAddStaff from './AssociateAddStaff'
import ViewSSS from './ViewSSS'

class AssociateStaff extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedStandardId: 0
        }
    }

    componentDidMount() {
        const { subjects, staffs, school, actions, dispatch } = this.props

        if (subjects.length <= 0)
            dispatch(actions.getAllSubjects(school.schoolId))


        if (staffs.length <= 0)
            dispatch(actions.allStaffs(school.schoolId))
    }

    componentWillReceiveProps(nextProps) {
        const { school, actions, dispatch, activeYear } = this.props

        if (nextProps.standardId !== 0 && this.props.standardId !== nextProps.standardId) {
            dispatch(actions.getsss(school.schoolId, nextProps.standardId, activeYear.eduYearId))
        }

        this.setState({
            selectedStandardId: nextProps.standardId
        })

    }
    render() {
        const { sss, standardId, staffs, subjects, dispatch, actions, school, activeYear } = this.props
        const { selectedStandardId } = this.state
        return (
            <div>
                {
                    selectedStandardId !== 0 &&
                    <div>
                        <h3 className='ui dividing header'> Associate Staff</h3>
                        <AssociateAddStaff {...this.props} />

                        {
                            sss && sss.map(function (sssObject, idx) {
                                return (
                                    <ViewSSS activeYear={activeYear} selectedStandardId={selectedStandardId} key={idx} school={school} staffs={staffs} subjects={subjects} sssObject={sssObject} dispatch={dispatch} actions={actions} standardId={standardId} />
                                )
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

export default AssociateStaff
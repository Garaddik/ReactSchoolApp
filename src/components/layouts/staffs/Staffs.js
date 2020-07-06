import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Staff from './Staff'
import NewStaff from './NewStaff'
import ImportStaff from './ImportStaff'
import { Button } from 'semantic-ui-react'

class Staffs extends Component{

    componentDidMount(){
        const {dispatch,actions,school} = this.props
        dispatch(actions.allStaffs(school.schoolId))
    }
      
    render(){
        const {staffs,actions,dispatch,school,loadStaffDetails} =  this.props
        return(
            <div>
                <form className='ui form' name='form-data'>
                <div className='field'>
                    <div className='four fields'>
                        <div className='four wide field'>
                             <h3> Staff</h3>
                        </div>
                        <div className='three wide field' style={{marginLeft:'32rem'}}>
                            <ImportStaff school={school} dispatch={dispatch} actions={actions}/>
                        </div>
                        <div className='five wide field'>
                            <a href="/assets/formats/Template.xlsx" download="Template.xlsx">
                            <Button basic color='teal' type="button" style={{marginLeft : '10px'}}>
                                Download Template
                            </Button></a>
                        </div>
                    </div>
                </div>
                <div className='ui dividing header' style={{marginTop: 'auto'}}></div>
                    <NewStaff school={school} dispatch={dispatch} actions={actions}/>
                    { staffs && staffs.map(function(staff, idx){
                        return(
                            <div className='field' key={idx}>
                                <Staff staff={staff} key={idx} actions={actions} dispatch={dispatch}
                                    school={school} loadStaffDetails = {loadStaffDetails}
                                />
                                </div>         
                        )
                    })}
                </form>    
            </div>

        )
    }
}

Staffs.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    staffs: PropTypes.array,
    school: PropTypes.object,
    loadStaffDetails: PropTypes.func
}

export default Staffs
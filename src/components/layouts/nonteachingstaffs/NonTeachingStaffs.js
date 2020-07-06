import React, {Component} from 'react'
import PropTypes from 'prop-types'
import NonTeachingStaff from './NonTeachingStaff'
import NewNonTeachingStaff from './NewNonTeachingStaff'


class NonTeachingStaffs extends Component{

    componentDidMount(){
        const {dispatch,actions,school} = this.props
        dispatch(actions.allNonTeachingStaffs(school.schoolId))
    }
      
    render(){
        const {nonTeachingStaffs,actions,dispatch,school,loadNonTeachingStaffDetails} =  this.props
        return(
            <div>
                <form className='ui form' name='form-data'>
                <div className='field'>
                    <div className='four fields'>
                        <div className='five wide field'>
                             <h3> Support Staff</h3>
                        </div>
                        
                    </div>
                </div>
                <div className='ui dividing header' style={{marginTop: 'auto'}}></div>
                    <NewNonTeachingStaff school={school} dispatch={dispatch} actions={actions}/>
                    {
                         nonTeachingStaffs && nonTeachingStaffs.map(function(nonTeachingStaff, idx){
                            if (nonTeachingStaff.type === 1){
                                return(
                                    <div className='field' key={idx}>
                                        <NonTeachingStaff nonTeachingStaff={nonTeachingStaff} key={idx} actions={actions} dispatch={dispatch}
                                            school={school} loadNonTeachingStaffDetails = {loadNonTeachingStaffDetails}
                                        />
                                        </div>         
                                )
                            }
                            else{
                                return null
                            }
                        })
                    }
                </form>    
            </div>

        )
    }
}

NonTeachingStaffs.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    nonTeachingStaffs: PropTypes.array,
    school: PropTypes.object,
    loadNonTeachingStaffDetails: PropTypes.func
}

export default NonTeachingStaffs
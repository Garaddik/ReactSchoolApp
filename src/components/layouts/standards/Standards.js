import React, {Component} from 'react';
import { Button, Input} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import Standard from './Standard';

class Standards extends Component{
    constructor(props){
        super(props);
        this.state ={
            standardName : ''
        }
        this.addStandard = this.addStandard.bind(this)
        this.getStandard = this.getStandard.bind(this)
    }

    componentDidMount(){
        const {dispatch,actions, school} = this.props
        dispatch(actions.allStandards(school.schoolId))
    }
    addStandard = () => {
        if(this.state.standardName !== ''){
            const standard = {
                name : this.state.standardName
            }
            const {dispatch,actions,school} = this.props
            dispatch(actions.addStandard(school.schoolId,standard))
            this.setState({
                standardName: ''
            })
        }
    }

    getStandard = (event) => {
        this.setState({
            standardName : event.target.value
        })
   }
    
    render(){
        const {standards,actions,dispatch,school} =  this.props
        return(
            <div>
                <h3 className='ui dividing header'> Standards</h3>
                <form className='ui form' name='form-data'>
                    <div className='field'>
                        <div className=' four fields'>
                            <div className='five wide field'>
                            <Input value={this.state.standardName} onChange={this.getStandard} control='input' placeholder='Enter the standard'/>
                            </div>
                            <div className='two wide field'>
                            <Button basic color='teal' type='button' onClick={this.addStandard}>Add</Button>
                            </div>
                        </div>
                    </div>
                    {standards && standards.map(function(standard, idx){
                        return(
                        <div className='field' key={idx}>
                                <Standard standard={standard} key={idx} actions={actions} dispatch={dispatch} 
                                school = {school}
                                />
                        </div>         
                    )
                    })}
                </form>    
            </div>

        )
    }
}

Standards.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    standards: PropTypes.array,
    school: PropTypes.object
}

export default Standards
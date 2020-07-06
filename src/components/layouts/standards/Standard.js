import React, {Component} from 'react'
import { Button, Input} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class Standard extends Component{
constructor(props){
    super(props);
    this.state = {
        isEdit : true,
        standard: {
            standardId : this.props.standard.standardId,
            name: this.props.standard.name
        }
    }
    this.showUpdateButton = this.showUpdateButton.bind(this)
    this.updateStandardName = this.updateStandardName.bind(this)
    this.updateStandard = this.updateStandard.bind(this)
    this.deleteStandard = this.deleteStandard.bind(this)
}

    showUpdateButton = () => {
        this.setState({
            isEdit : false
        })
        }
    updateStandardName = (event) => {
       this.setState({
        standard: {
            standardId: this.state.standard.standardId,
            name: event.target.value
        }
       })
    }

    updateStandard = () => {
        
        const {dispatch,actions,school} = this.props
        dispatch(actions.updateStandard(school.schoolId, this.state.standard))
        this.setState({
            isEdit : true
        })
    }

    deleteStandard = () => {
        const {dispatch,actions,school} = this.props
        dispatch(actions.deleteStandard(school.schoolId, this.props.standard.standardId))
    }

    render(){
        const standard = this.props.standard
        return(
            <div className=' four fields'>
                <div className='five wide field'>
                    {this.state.isEdit &&   <
                         Input control='input' placeholder='Enter the standard' >{standard.name}</Input>
                    }
                    {
                        !this.state.isEdit &&   
                        <Input onChange={this.updateStandardName} control='input' defaultValue={standard.name}></Input>
                    }
                </div>
                <div className='two wide field'>
                     {this.state.isEdit &&  <Button basic color='teal' type="button" onClick={this.showUpdateButton}>Edit</Button>}
                     {!this.state.isEdit &&  <Button basic color='teal' type="button" onClick={this.updateStandard}>Update</Button>}
                </div>
                <div  className='two wide field'>
                { <Button basic color='teal' type="button" onClick={this.deleteStandard}>Delete</Button>}
                    </div>
            </div> 

        )
    }
}

Standard.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    standard: PropTypes.object,
    updateStandard:PropTypes.func
}

export default Standard
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { Container, Icon, Header, Input } from 'semantic-ui-react'
import './Home.css'
import Schools from '../schools/Schools'

class HomePageBody extends Component{ 
  constructor(props){
    super(props);
    this.state = {
      value :'', 
      result : false
    }
    this.getSchools = this.getSchools.bind(this)
    this.readSearchString = this.readSearchString.bind()
    }

  getSchools = (searchString) => {
    const {dispatch,actions} = this.props
    dispatch(actions.fetchSchools(searchString))
    this.setState({
      result : true
    })
  }

  onKeyPress = (e) => {
    if(e.key === 'Enter' && e.target.value !== ''){
      this.getSchools(e.target.value);
    }
  }

  onClick = () => {
    this.getSchools(this.state.value)
  }
  readSearchString = (e) => {
    this.setState({
      value : e.target.value
    })
    if( e.target.value === ''){
      this.setState({
        result : false
      })
    }
  }

  render () {
    const error =  "Sorry, no matches found"
    return(
     <Container className="body-container">
       <Header
        as='h1'
        content='Shaala'
      />
      <Input size='big' className="wide-input" 
        icon={<Icon name='search' inverted circular link
          onClick={this.onClick}
         />}
        placeholder='Search for your school'
        onChange={this.readSearchString}
        onKeyPress={this.onKeyPress}   
        autoFocus
      />
        <Schools schools={this.props.schools} dispatch={this.props.dispatch}/>
      {
        this.props.schools.length === 0 && this.state.result === true && this.state.value !== '' &&
          <span> {error}</span>
      }
    </Container>
    )
  }
}

HomePageBody.propTypes = {
    schools:PropTypes.array,
    dispatch: PropTypes.func,
    actions: PropTypes.object
}

export default HomePageBody
  
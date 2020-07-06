import {connect} from 'react-redux'
import Subjects from '../components/layouts/subjects/Subjects'
import {addSubject, getAllSubjects, updateSubject, deleteSubject} from '../actions/SubjectAction'

function mapStateToProps(state){
  return{
    subjects: state.subjects,
    school: state.school,
    actions:{
        addSubject: addSubject,
        getAllSubjects:getAllSubjects,
        updateSubject:updateSubject,
        deleteSubject:deleteSubject
    }
  } 
}

export default connect(mapStateToProps)(Subjects)

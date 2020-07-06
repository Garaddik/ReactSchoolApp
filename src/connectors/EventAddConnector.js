import { connect } from 'react-redux'
import AddEvent from '../components/layouts/event/add/AddEvent'
import { addEvent, updateEvent, uploadEventGalleryImage, deleteEventImage, updateEventGalleryImageDescription} from '../actions/EventActions'

function mapStateToProps(state) {
  return {
    school: state.school,
    event: state.event,
    actions: {
      addEvent: addEvent,
      updateEvent: updateEvent,
      uploadEventGalleryImage: uploadEventGalleryImage,
      deleteEventImage: deleteEventImage,
      updateEventGalleryImageDescription: updateEventGalleryImageDescription
    }
  }
}
export default connect(mapStateToProps)(AddEvent)

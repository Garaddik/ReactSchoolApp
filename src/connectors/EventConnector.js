import { connect } from 'react-redux'
import AbstractEvent from '../components/layouts/event/view/AbstractEvent'
import { addEvent, updateEvent, uploadEventGalleryImage, getAllEvents, deleteEvent} from '../actions/EventActions'

function mapStateToProps(state) {
  return {
    school: state.school,
    events: state.events,
    actions: {
      addEvent: addEvent,
      updateEvent: updateEvent,
      uploadEventGalleryImage: uploadEventGalleryImage,
      getAllEvents: getAllEvents,
      deleteEvent:deleteEvent
    }
  }
}
export default connect(mapStateToProps)(AbstractEvent)

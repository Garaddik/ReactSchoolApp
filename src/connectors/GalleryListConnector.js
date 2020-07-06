import {connect} from 'react-redux'
import GalleryList from '../components/layouts/gallery/GalleyList'
import {uploadTemplateGalleryImage,updateEventGalleryImageDescription,  deleteGalleryImage} from '../actions/GalleryAction'
import {getSelectedSchoolTemplate} from '../actions/SchoolTemplateAction'


function mapStateToProps(state){

    return{
        school:state.school,
        schoolTemplate:state.schoolTemplate,
        actions:{
            uploadTemplateGalleryImage: uploadTemplateGalleryImage,
            getSelectedSchoolTemplate:getSelectedSchoolTemplate,
            deleteGalleryImage:deleteGalleryImage,
            updateEventGalleryImageDescription: updateEventGalleryImageDescription
        }
    }
}

export default connect(mapStateToProps) (GalleryList)
import React, {Component} from 'react'
import XLSX from 'xlsx'
import ReactFileReader from 'react-file-reader'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

class ImportStaff extends Component{
    constructor(props) {
        super(props);
        this.state = {
            open : false
        }
        this.handleFiles = this.handleFiles.bind(this)
      }

    handleConfirm = () => this.setState({ open: false })
    handleCancel = () => this.setState({ open: false })

      handleFiles(files) {
            var reader = new FileReader()
            reader.onload = (e) => {
            var fileContents = e.target.result
            var workbook = XLSX.read(fileContents, {
            type: 'binary'
          })
            workbook.SheetNames.forEach((sheetName) => {
                var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName])
                for(let i =0; i<XL_row_object.length; i++){
                    if(XL_row_object[i].firstName !== "" && XL_row_object[i].lastName !== "" && XL_row_object[i].phoneNumber !== ""){
                    const staff = {
                        firstName: XL_row_object[i].firstName,
                        lastName: XL_row_object[i].lastName,
                        phoneNumber: XL_row_object[i].phoneNumber
                    }
                const {dispatch, actions, school} = this.props
                dispatch(actions.addStaff(school.schoolId, staff))
            }
        }
          })
        }
        reader.onerror = function(ex) {
        }
        reader.readAsBinaryString(files[0])
      }

    render () {
        return(
            <ReactFileReader fileTypes={[".csv", ".xls", ".xlsx"]} handleFiles={this.handleFiles}>
                <Button basic color='teal' type="button" >Import Staff</Button>
            </ReactFileReader>
        )
        
    }
}

ImportStaff.propTypes = {
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    students: PropTypes.array,
    school: PropTypes.object,
    standardId:PropTypes.string
}

export default ImportStaff
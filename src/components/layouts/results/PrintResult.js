import React, {Component} from "react"
import ReactToPrint from "react-to-print"
import { Table, Button, Container, Header, Image } from 'semantic-ui-react'

class ComponentToPrint extends Component {
  render() {
    const {studentResult, school, result, examSchedule} = this.props
    let tableData = []
    let languages = []
    let optionals = []
    let row = []
    let totalMarks = 0
    let totalObtainedMarks = 0
    let percentage = 0
    let classObtained = ''
      for(let i=0; i<studentResult.length; i++){
        if(studentResult[i].subjectName.includes('Kannada') || studentResult[i].subjectName.includes('English') ||
        studentResult[i].subjectName.includes('Hindi') || studentResult[i].subjectName.includes('Sanskrit')) 
        {
          languages.push(
            <Table.Row key={Math.random()}>
                <Table.Cell style={{textAlign : 'center'}}>{studentResult[i].subjectName}</Table.Cell>
                <Table.Cell style={{textAlign : 'center'}}>{studentResult[i].maxMarks}</Table.Cell>
                <Table.Cell style={{textAlign : 'center'}}>{studentResult[i].marks}</Table.Cell>
            </Table.Row>
          )          
        }
        else {
             optionals.push(
              <Table.Row key={Math.random()} >
                <Table.Cell style={{textAlign : 'center'}}>{studentResult[i].subjectName}</Table.Cell>
                <Table.Cell style={{textAlign : 'center'}}>{studentResult[i].maxMarks}</Table.Cell>
                <Table.Cell style={{textAlign : 'center'}}>{studentResult[i].marks}</Table.Cell>
            </Table.Row>
             )
        }
            totalObtainedMarks+= studentResult[i].marks
            if(studentResult[i].marks !== 0 ){
              totalMarks+= studentResult[i].maxMarks
            }
            percentage = ((totalObtainedMarks / totalMarks) * 100).toFixed(2)
            if(percentage >= 70){
              classObtained = 'First Class with Distinction'
            }
            else if( percentage >= 60 && percentage < 70){
              classObtained = 'First Class'
            }
            else if(percentage >= 50 && percentage < 60){
              classObtained = 'Second Class'
            }
            else if( percentage >= 40 && percentage < 50){
              classObtained = 'Third Class'
            }
            else {
              classObtained = 'Fail'
            }
      }
      row.push(
        <Table.Row key={Math.random()}>
            <Table.Cell style={{textAlign : 'center'}}> Total </Table.Cell>
            <Table.Cell style={{textAlign : 'center'}}> {totalMarks} </Table.Cell>
            <Table.Cell style={{textAlign : 'center'}}> {totalObtainedMarks} </Table.Cell>
        </Table.Row>
      )
      row.push(
        <Table.Row key={Math.random()} >
          <Table.Cell style={{textAlign : 'center'}}>
            Percentage :  {percentage}
          </Table.Cell>
          <Table.Cell style={{textAlign : 'center'}}>
            Class Obtained -
          </Table.Cell>
          <Table.Cell style={{textAlign : 'center'}}>
            {classObtained}
          </Table.Cell>
        </Table.Row>
      )
    tableData.push(row)
    return (
          <div style={{minWidth: '750px', minHeight : '1080px',  margin : '10px', borderStyle: 'solid', alignSelf: 'center', top:'0', bottom : '0'}}>
              <Header as='h2' icon textAlign='center' style={{marginTop : '20px'}}>
                {
                  school.template && school.template.logoPath &&
                  <Image src={school.template.logoPath} size='medium' style={{padding : '3px'}} />
                }
                {school.name}
                <Header.Subheader style={{lineHeight : '1.5em'}}>
                  {
                    school.template &&
                    school.template.title 
                  }
                </Header.Subheader>
                <Header.Subheader style={{lineHeight : '1.5em'}}>
                  {
                    school.template &&
                    school.template.address.line1 + ', ' + school.template.address.line2 + ', ' +
                    school.template.address.city + ', ' + school.template.address.postalCode
                  }
                </Header.Subheader>
                <Header.Subheader style={{lineHeight : '1.5em'}}>
                  {
                    school.governmentOrder
                  }
                </Header.Subheader>
                <Header.Subheader style={{lineHeight : '1.5em'}}>
                  {
                    'College Code : ' + school.schoolCode
                  }
                </Header.Subheader>
                <Header.Subheader style={{lineHeight : '1.5em'}}>
                  {
                    school.accreditation
                  }
                </Header.Subheader>
              </Header>
              <div className='ui dividing header'></div>
              <Header textAlign='center'>Marks Card</Header>
              <Container style={{marginLeft: '20px'}}>
                <p style={{textAlign: 'center'}}>This is the certify that the below mentioned student has passed in the {examSchedule.exam.name} with the following details</p>
                <p>
                  <span style={{marginRight : '17px'}}>Student Name  : </span> {result.firstName + ' ' + result.lastName}
                </p>
                <p>
                  <span style={{marginRight : '15px'}}>Father's Name : </span>{result.fatherFirstName ? (result.fatherFirstName + ' ' + result.fatherLastName) : ''}
                </p>
                <p>
                  <span style={{marginRight : '9px'}}>Mother's Name : </span>{result.motherFirstName ? (result.motherFirstName + ' ' + result.motherLastName) : ''}
                </p>
                <p>
                  <span style={{marginRight : '3px'}}> Student Number : </span> {result.sats}
                </p>
              </Container>
                <Table celled structured style={{width: '99%', marginLeft: '4px'}}>
                  <Table.Header>
                      <Table.Row>
                          <Table.HeaderCell textAlign='center'>Subjects</Table.HeaderCell>
                          <Table.HeaderCell textAlign='center'>Max Marks</Table.HeaderCell>
                          <Table.HeaderCell textAlign='center'>Marks Obtained</Table.HeaderCell>
                      </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell style={{textAlign : 'center'}}>Part - I Languages</Table.Cell>
                      <Table.Cell style={{textAlign : 'center'}}></Table.Cell>
                      <Table.Cell style={{textAlign : 'center'}}></Table.Cell>
                    </Table.Row>
                    {languages}
                    <Table.Row>
                      <Table.Cell style={{textAlign : 'center'}}>Part - II Optional</Table.Cell>
                      <Table.Cell style={{textAlign : 'center'}}></Table.Cell>
                      <Table.Cell style={{textAlign : 'center'}}></Table.Cell>
                    </Table.Row>
                    {optionals}
                    {tableData}
                  </Table.Body>
                </Table>
                <div style={{marginBottom: '60px', minWidth : '780px',position: 'fixed', bottom : '0'}}>
                  <p style={{float: 'left', width:'33%',  textAlign: 'center'}}>Canditate's Signature</p>
                  <p style={{float: 'left', width:'33%', textAlign: 'center'}}>Principal</p>
                  <p style={{float: 'left', width:'33%', textAlign: 'center'}}>Office</p>
                </div>
            </div>
    );
  }
}

export default class PrintResult extends Component {
  render() {
    const {studentResult, school, result, examSchedule} = this.props
    return (
      <div>
        <ReactToPrint
          trigger={() => <Button basic color='teal' type="button">Print Result</Button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} studentResult={studentResult} school={school} result={result} examSchedule={examSchedule}/>
      </div>
    );
  }
}

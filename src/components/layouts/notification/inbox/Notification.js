import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import { Popup, Grid } from 'semantic-ui-react'

class Notification extends Component {

    constructor(props) {
        super(props)
        this.state = {
            createDatetime: moment.utc(this.props.notification.createDatetime).local()
        }
    }
    render() {
        const { notification, index } = this.props
        let title = ''
        let isStaff = true
        if (notification.notificationSents.length > 0 && notification.notificationSents[0].staff !== undefined) {
            title = "Staff Details"
            isStaff = true
        } 
        else {
            title = "Student Details"
            isStaff = false
        }

        return (
            <div className='field'>
                <div className='five fields'>
                    <div className='one wide field'>
                        <Input control='input' >{index + 1}</Input>
                    </div>
                    <div className='five wide field'>
                        <Input control='input' >{notification.title}</Input>
                    </div>
                    <div className="five wide field">
                        <Input control='input' >{notification.text}</Input>
                    </div>
                    <div className='four wide field'>
                        <DatePicker
                            selected={this.state.createDatetime}
                            dateFormat="Do-MMM-YY h:mm:ss a"
                            disabled={true}
                        />
                    </div>
                    <div className='four wide field'>
                    
                    {
                        notification.staff && 
                        <Input control='input' >{notification.staff.firstName +" " + notification.staff.lastName}</Input>
                    }

                    {
                        notification.schoolAdmin && 
                        <Input control='input' >{notification.schoolAdmin.firstName +" " + notification.schoolAdmin.lastName}</Input>
                    }
                    </div>
                    <div className='two wide field'>
                        <Popup trigger={<Button basic color='teal' type='button'>Details</Button>} flowing hoverable>
                            <Grid bottom='true' left='true' divided columns={1} style={{
                                bottom: 10,
                                overflowY: 'auto',
                                width: 200,
                                padding: 0,
                            }}>
                                <h3 className='ui left floating header'>{title}</h3>
                                {
                                    notification.notificationSents && notification.notificationSents.map(function (notificationSent, idx) {
                                        return (
                                            <Grid.Column textAlign='left' key={idx}>
                                                <div>
                                                    {
                                                        isStaff &&
                                                        <div>
                                                            {
                                                                notificationSent.staff.firstName + "  " + notificationSent.staff.lastName
                                                            }
                                                        </div>
                                                    }
                                                    {
                                                        !isStaff &&
                                                        <div>
                                                            {
                                                                notificationSent.student.firstName + "  " + notificationSent.student.lastName
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </Grid.Column>
                                        )
                                    })
                                }
                            </Grid>
                        </Popup>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notification
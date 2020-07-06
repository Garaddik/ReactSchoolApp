import React, { Component } from 'react'
import ViewSchool from './ViewSchool'
import EditSchool from './EditSchool'

class TemplateSchool extends Component {

    constructor(props) {
        super(props)
        this.state = {
            schoolViewType: 0
        }
        this.schoolViewType = this.schoolViewType.bind(this)
    }

    schoolViewType(type) {
        this.setState({
            schoolViewType: type
        })
    }
    render() {
        return (
            <div>
                <div>
                    {
                        this.state.schoolViewType === 0 &&
                        <ViewSchool school={this.props.school}
                        parentMethod={this.schoolViewType} />
                    }
                    {
                        this.state.schoolViewType === 1 &&
                        <EditSchool school={this.props.school} parentMethod={this.schoolViewType}
                        actions={this.props.actions} dispatch={this.props.dispatch} />
                    }
                </div>
            </div>
        )
    }
}

export default TemplateSchool
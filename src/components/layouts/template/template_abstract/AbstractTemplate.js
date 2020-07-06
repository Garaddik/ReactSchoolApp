import React, { Component } from 'react'
import ViewTemplate from './ViewTemplate'
import AddTemplate from './AddTemplate'
import EditTemplate from './EditTemplate'

class AbstractTemplate extends Component {

    constructor(props) {
        super(props)

        if (this.props.schoolTemplate.templateId === undefined) {
            this.state = {
                templateViewType: 2
            }
        } else {
            this.state = {
                templateViewType: 0,
                schoolTemplate: this.props.schoolTemplate
            }
        }

        this.templateViewType = this.templateViewType.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.schoolTemplate.templateId === undefined) {

            this.setState({
                templateViewType: 2
            })
        } else {
            this.setState({
                templateViewType: 0,
                schoolTemplate: nextProps.schoolTemplate
            })
        }
    }

    templateViewType(type, from, template) {
        if (from === 1 || from === 2) {
            this.setState({
                templateViewType: type,
                schoolTemplate: {
                    title: template.title,
                    description: template.description,
                    logoPath: template.logoPath
                }
            })
        } else {
            this.setState({
                templateViewType: type
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.templateViewType === 0 &&
                        <ViewTemplate school={this.props.school} schoolTemplate={this.state.schoolTemplate}
                            dispatch={this.props.dispatch} actions={this.props.actions}
                            parentMethod={this.templateViewType} />
                    }
                    {
                        this.state.templateViewType === 1 &&
                        <EditTemplate school={this.props.school} schoolTemplate={this.props.schoolTemplate}
                            dispatch={this.props.dispatch} actions={this.props.actions}
                            parentMethod={this.templateViewType} />
                    }
                    {
                        this.state.templateViewType === 2 &&
                        <AddTemplate school={this.props.school} dispatch={this.props.dispatch}
                            actions={this.props.actions} parentMethod={this.templateViewType} />
                    }

                </div>
            </div>
        )
    }
}

export default AbstractTemplate
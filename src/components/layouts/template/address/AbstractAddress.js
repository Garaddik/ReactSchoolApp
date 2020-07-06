import React, { Component } from 'react'
import ViewAddress from './ViewAddress'
import AddAddress from './AddAddress'
import EditAddress from './EditAddress'

class AbstractAddress extends Component {

    constructor(props) {
        super(props)
        this.state = {
            addressViewType: this.props.schoolTemplate.address === undefined ? 2 : 0
        }
        this.addressViewType = this.addressViewType.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            addressViewType: nextProps.schoolTemplate.address === undefined ? 2 : 0
        })
    }

    addressViewType(type) {
        this.setState({
            addressViewType: type
        })
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.addressViewType === 0 &&
                        <ViewAddress school={this.props.school} schoolTemplate={this.props.schoolTemplate}
                        dispatch={this.props.dispatch} actions={this.props.actions} parentMethod={this.addressViewType} />
                    }
                    {
                        this.state.addressViewType === 1 &&
                        <EditAddress school={this.props.school} schoolTemplate={this.props.schoolTemplate}
                        dispatch={this.props.dispatch} actions={this.props.actions} parentMethod={this.addressViewType} />
                    }
                    {
                        this.state.addressViewType === 2 &&
                        <AddAddress school={this.props.school} schoolTemplate={this.props.schoolTemplate}
                        dispatch={this.props.dispatch} actions={this.props.actions} parentMethod={this.addressViewType} />
                    }
                </div>
            </div>
        )
    }
}

export default AbstractAddress
import { connect } from 'react-redux'
import DashboardTemplate from '../components/commons/templates/dashboard/DashboardTemplate'

function mapStateToProps(state) {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps) (DashboardTemplate)
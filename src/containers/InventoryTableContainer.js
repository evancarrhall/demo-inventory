import { connect } from 'react-redux'
import { 
    toggleDepartmentCollapse,
    changeSearchText } from '../actions/actions.js'
import InventoryTable from '../components/InventoryTable.js'

const mapStateToProps = state => {
    return {
        searchText: state.searchText,
        collapsedDepartments: state.collapsedDepartments,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDepartmentCollapse: (name) => {
            dispatch(toggleDepartmentCollapse(name));
        },
        changeSearchText: (e) => {
            dispatch(changeSearchText(e.target.value))
        }
    }
}
  
const InventoryTableContainer = connect(mapStateToProps, mapDispatchToProps)(InventoryTable)

export default InventoryTableContainer
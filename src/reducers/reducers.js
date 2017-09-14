import { combineReducers } from 'redux'
import {
    TOGGLE_DEPARTMENT_COLLAPSE,
    CHANGE_SEARCH_TEXT,} from '../actions/index.js'

function searchText(state = "", action) {
    switch (action.type) {
        case CHANGE_SEARCH_TEXT:
            return action.text;
        default:
            return state;
    }
}

function collapsedDepartments(state = new Set(), action) {
    switch (action.type) {
        case TOGGLE_DEPARTMENT_COLLAPSE:
            let collapsedDepartments = new Set(state);
            collapsedDepartments.has(action.name) ?
                collapsedDepartments.delete(action.name) : collapsedDepartments.add(action.name);
            return collapsedDepartments;
        default:
            return state;
    }
}

const inventoryApp = combineReducers({
    searchText,
    collapsedDepartments,
})

export default inventoryApp
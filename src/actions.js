/*
 * action types
 */

// export const ADD_TODO = 'ADD_TODO'
// export const TOGGLE_TODO = 'TOGGLE_TODO'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const TOGGLE_DEPARTMENT_COLLAPSE = 'TOGGLE_DEPARTMENT_COLLAPSE'
export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT'

/*
 * other constants
 */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/*
 * action creators
 */

// export function addTodo(text) {
//   return { type: ADD_TODO, text }
// }

// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index }
// }

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }

export function toggleDepartmentCollapse(name) {
    return { type: TOGGLE_DEPARTMENT_COLLAPSE, name }
}

export function changeSearchText(text) {
    return { type: CHANGE_SEARCH_TEXT, text }
}
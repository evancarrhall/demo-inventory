export const TOGGLE_DEPARTMENT_COLLAPSE = 'TOGGLE_DEPARTMENT_COLLAPSE'
export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT'

export function toggleDepartmentCollapse(name) {
    return { type: TOGGLE_DEPARTMENT_COLLAPSE, name }
}

export function changeSearchText(text) {
    return { type: CHANGE_SEARCH_TEXT, text }
}
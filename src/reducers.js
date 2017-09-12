import { combineReducers } from 'redux'
// import {
//     ADD_TODO,
//     TOGGLE_TODO,
//     SET_VISIBILITY_FILTER,
//     VisibilityFilters
// } from './actions'
import {
    TOGGLE_DEPARTMENT_COLLAPSE,
    CHANGE_SEARCH_TEXT,
} from './actions'
// const { SHOW_ALL } = VisibilityFilters

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
            let collapsedDepartments = Object.assign(new Set(), state);
            collapsedDepartments.add(action.name);
            return collapsedDepartments;
        default:
            return state;
    }
}

const inventoryApp = combineReducers({
    searchText,
    collapsedDepartments,
})

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }

// function todos(state = [], action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         {
//           text: action.text,
//           completed: false
//         }
//       ]
//     case TOGGLE_TODO:
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//             completed: !todo.completed
//           })
//         }
//         return todo
//       })
//     default:
//       return state
//   }
// }

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })

export default inventoryApp
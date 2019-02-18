import {combineReducers} from 'redux'

export const services = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SERVICE': 
            return [[action.name, action.price], ...state]
        case 'REMOVE_SERVICE':
            let index = state.findIndex((service) => {return service[0] === action.name})
            if (index > -1) 
                state.splice(index, 1)

            return state
        default: 
            return state
    }
}

export const totalprice = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PRICE': 
            if (state.length === 1){
                return [parseInt(action.price, 10) + parseInt(state, 10)]
            }
            else 
                return [parseInt(action.price)]
        case 'SUB_PRICE':
            return [parseInt(state, 10) - parseInt(action.price, 10)]
        default:
            return state
    }
}

export default combineReducers({
    services,
    totalprice,
})
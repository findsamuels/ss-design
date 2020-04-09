import * as actionType from '../actions/actionTypes'
import stateUtility from '../../Util/StateUtility'


const initialState = {
    showDrawer: false,
    scrolled: false,
    showNavItems: true,
    showModal: false,
}



const toggleSideDrawer = (state) => {
    return stateUtility(state, {
        showDrawer: !state.showDrawer
    })
}

const hideModalAndDrawer = (state) => {
return stateUtility(state, {
    showDrawer: false,
    showModal: false
})
}
const toggleModal = (state) => {
    return stateUtility(state, {
        showModal: !state.showModal
    })
}
const handleScroll = (state, action) => {

    return stateUtility(state, {
        scrolled: action.scrolled
    })
}


const showNavItems = (state, action) => {
    return stateUtility(state, {
        showNavItems: action.showNavItems
    })
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.TOGGLE_SIDE_DRAWER:
            
            return toggleSideDrawer(state)
           case actionType.HANDLE_SCROLL:
               return handleScroll(state, action)
              
            case actionType.SHOW_NAV_ITEMS:
                return showNavItems(state, action)
                case actionType.TOGGLE_MODAL:
                    return toggleModal(state)
                    case actionType.HIDE_MODAL_DRAWER:
            return hideModalAndDrawer(state)


    
        default:
            return state
    }
}
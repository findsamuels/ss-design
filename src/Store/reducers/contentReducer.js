import * as actionType from '../actions/actionTypes'
import stateUtility from '../../Util/StateUtility'


const initialState = {
aboutRef: null,
skillRef: null,
experienceRef: null,
contactRef: null
}

const componentRefs = (state, action) => {
    return stateUtility(state, {
        aboutRef: action.aboutRef,
        experienceRef: action.experienceRef,
        skillRef: action.skillRef,
        contactRef: action.contactRef
    })
}

export const contentReducer = (state = initialState, action) => {

    switch(action.type){
        case actionType.GET_REF:
            return componentRefs(state, action)

         default:
             return state
    }
}
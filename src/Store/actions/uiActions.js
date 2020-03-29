import * as actionTypes from './actionTypes'

export const toggleSideDrawer = () => {
    return{
        type: actionTypes.TOGGLE_SIDE_DRAWER
    }
}
export const hideModalAndDrawer = () => {
    return{
        type: actionTypes.HIDE_MODAL_DRAWER
    }
}



export const toggleModal = () => {
    return {
        type: actionTypes.TOGGLE_MODAL
    }
}

export const handleScroll = (scrolling) => {
    return {
        type: actionTypes.HANDLE_SCROLL,
        scrolled: scrolling
    }
}
export const componentRefs = (aboutRef, experienceRef, skillRef, contactRef) => {
    return{
        type: actionTypes.GET_REF,
        aboutRef: aboutRef,
        experienceRef: experienceRef,
        skillRef: skillRef,
        contactRef: contactRef
    }
}

export const showNavItems = (showNavItems) => {
    return{
        type: actionTypes.SHOW_NAV_ITEMS,
        showNavItems: showNavItems
    }
}
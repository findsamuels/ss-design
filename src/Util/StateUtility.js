const stateUtility = (utilityState, utilityValue) => {
    return{
        ...utilityState,
        ...utilityValue
    }
}

export default stateUtility
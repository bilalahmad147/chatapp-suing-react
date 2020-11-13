export const INCREAMENT = 'INCREAMENT'

export const increament = () => {
    return {
        type: INCREAMENT,
        payload: action.payload
    }
}
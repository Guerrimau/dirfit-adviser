export const formatCreatePatient = (resData) => {
    return {
        id: resData.data.id,
        ...resData.data.attributes
    }
}
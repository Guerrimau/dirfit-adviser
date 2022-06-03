export const formatCreateMeal = (resData) => {
    return {
        id: resData.data.id,
        ...resData.data.attributes
    }
}
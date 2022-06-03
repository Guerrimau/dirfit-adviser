export const formatGetManyMeals = (resData) => {
    return resData.data.map(meal => {
        return {
            id: meal.id,
            ...meal.attributes
        }
    });
}
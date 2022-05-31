export const formatGetManyPatients = (resData) => {
    return resData.data.map(patient => {
        return {
            id: patient.id,
            ...patient.attributes
        }
    });
}
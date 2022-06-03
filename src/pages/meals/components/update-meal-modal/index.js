import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import { api } from '../../../../service/api';


export const UpdateMealModal = ({
    show = false,
    mealData,
    closeModal = () => {},
    updateMeal = () => {}
}) => {
    const [meal, setMeal] = useState({});

    const onFormChange = (e) => {
        setMeal(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    const onSaveMealClick = async () => {
        try {
            const data = { ...meal };
            delete data.id;
            await api.meals.update(data, meal.id);
            updateMeal(meal);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setMeal(mealData);
    }, [mealData])

    return (
        <Dialog open={show} onClose={closeModal}>
            <DialogTitle>Actualizar comida</DialogTitle>
            <DialogContent>
                <TextField
                    id="name"
                    label="Nombre"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={meal?.name}
                    onChange={onFormChange} />
                <TextField
                    id="ingredients"
                    label="Ingredientes"
                    type="text"
                    fullWidth
                    multiline
                    minRows={4}
                    variant="standard"
                    value={meal?.ingredients}
                    onChange={onFormChange} />
                <Stack direction="row" spacing={2}>
                    <TextField
                        id="proteins"
                        label="Proteinas"
                        type="number"
                        variant="standard"
                        value={meal?.proteins}
                        onChange={onFormChange} />
                    <TextField
                        id="carbs"
                        label="Carbohidratos"
                        type="number"
                        variant="standard"
                        value={meal?.carbs}
                        onChange={onFormChange} />
                    <TextField
                        id="fats"
                        label="Grasas"
                        type="number"
                        variant="standard"
                        value={meal?.fats}
                        onChange={onFormChange} />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeModal}>Cancelar</Button>
                <Button onClick={onSaveMealClick}>Agregar</Button>
            </DialogActions>
        </Dialog>
    )
}

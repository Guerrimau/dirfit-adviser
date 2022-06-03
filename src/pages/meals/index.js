import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { Sidebar } from '../../components/sidebar';
import { Add } from "@mui/icons-material";
import { MealCard } from '../../components/meal-card';
import { CreateMealModal } from './components/create-meal-modal';
import { api } from '../../service/api';
import { formatGetManyMeals } from '../../service/api/formatters/meals/get-many-meals';
import { UpdateMealModal } from './components/update-meal-modal';

const updateMealModalInitialState = {
    show: false,
    meal: {}
};

export const MealsPage = () => {
    const [meals, setMeals] = useState([]);
    const [showCreateMealModal, setShowCreateMealModal] = useState(false);
    const [updateMealModal, setUpdateMealModal] = useState(updateMealModalInitialState);

    const onShowUpdateMealModal = (meal) => {
        setUpdateMealModal({
            meal,
            show: true
        });
    }

    const onCloseUpdateMealModal = () => {
        setUpdateMealModal(updateMealModalInitialState);
    }

    const onShowCreateMealModal = () => {
        setShowCreateMealModal(true);
    }

    const onCloseCreateMealModal = () => {
        setShowCreateMealModal(false);
    }

    const onDeleteMealClick = async (deletedId) => {
        try {
            await api.meals.delete(deletedId);
            const newMealsList = meals.filter(meal => meal.id !== deletedId);
            setMeals(newMealsList);
        } catch (error) {
            console.error(error);
        }
    }

    const addMeal = (newMeal) => {
        setMeals(meals.concat([newMeal]));
    }

    const updateMeal = (updatedMeal) => {
        const newMealsList = meals.map(meal => {
            if(meal.id === updatedMeal.id) {
                return updatedMeal;
            } else {
                return meal;
            };
        })
        setMeals(newMealsList);
    }

    useEffect(() => {
        const getData = async () => {
            const res = await api.meals.getMany();
            const formatedData = formatGetManyMeals(res.data);
            setMeals(formatedData);
        }

        getData();
    }, []);

    return (
        <div style={{ height: "100vh", display: "grid", gridTemplateColumns: "250px calc(100vw - 250px)" }}>
            <Sidebar />
            <main style={{ padding: "60px", overflowY: "scroll" }}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Typography variant="h4">Comidas</Typography>
                    <Button
                        variant="text"
                        startIcon={<Add />}
                        sx={{
                            backgroundColor: "rgb(165, 65, 247, 0.15)",
                            borderRadius: "20px",
                            padding: "10px 20px"
                        }}
                        onClick={onShowCreateMealModal}>
                        Agregar comida
                    </Button>
                </Stack>
                <Box flexGrow={1} style={{ marginTop: "25px" }}>
                    <Grid container spacing={2} gridRow="300px">
                        {meals.map((meal) => (
                            <Grid item xs={3} key={meal.id}>
                                <MealCard
                                    mealData={meal}
                                    onUpdate={() => onShowUpdateMealModal(meal)}
                                    onDelete={() => onDeleteMealClick(meal.id)} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <CreateMealModal
                    show={showCreateMealModal}
                    closeModal={onCloseCreateMealModal}
                    addMeal={addMeal} />
                <UpdateMealModal
                    show={updateMealModal.show}
                    mealData={updateMealModal.meal}
                    closeModal={onCloseUpdateMealModal}
                    updateMeal={updateMeal} />
            </main>
        </div>
    )
}

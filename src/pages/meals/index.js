import React, { useState } from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { Sidebar } from '../../components/sidebar';
import { Add } from "@mui/icons-material";
import { MealCard } from '../../components/meal-card';
import { CreateMealModal } from './components/create-meal-modal';

export const MealsPage = () => {
    const [showCreateMealModal, setShowCreateMealModal] = useState(false);

    const onShowCreateMealModal = () => {
        setShowCreateMealModal(true);
    }

    const onCloseCreateMealModal = () => {
        setShowCreateMealModal(false);
    }

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
                        {Array.from(Array(25)).map((_, index) => (
                            <Grid item xs={3} key={index}>
                                <MealCard />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <CreateMealModal
                    show={showCreateMealModal}
                    closeModal={onCloseCreateMealModal} />
            </main>
        </div>
    )
}

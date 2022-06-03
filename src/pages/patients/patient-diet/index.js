import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import { MealCard } from "../../../components/meal-card";
import { Sidebar } from "../../../components/sidebar";

export const PatientDietPage = () => {

    const mealReadableName = {
        "breakfasts": "Desayunos",
        "lunches": "Comidas",
        "dinners": "Cenas"
    }

    const renderMealList = (name, data) => {
        return (<>
            <Typography variant="h5">{mealReadableName[name]}</Typography>
            <Stack
                direction="row"
                width="100%"
                justifyContent="space-between"
                alignItems="center">
                <Stack
                    direction="row"
                    width={"95%"}
                    spacing={4}
                    pb={2}
                    sx={{ overflowX: "scroll" }}>
                    {data.map(meal => (
                        <MealCard mealData={meal} showActions={false} />
                    ))}
                </Stack>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </Stack>
        </>
        );
    }

    return (
        <div style={{ height: "100vh", display: "grid", gridTemplateColumns: "250px calc(100vw - 250px)" }}>
            <Sidebar />
            <main style={{ padding: "60px" }}>
                <Typography variant="h4">Gerardo Mayboca</Typography>
                <Typography variant="body1">Plan alimenticio del 02/06/2022</Typography>
                {renderMealList("breakfasts", [])}
                {renderMealList("lunches", [])}
                {renderMealList("dinners", [])}
            </main>
        </div>
    )
}

import React from 'react'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "../../styles/components/meal-card/styles.css";

export const MealCard = ({ mealData, showActions = true, onUpdate, onDelete }) => {
    return (
        <Card sx={{ width: "300px" }}>
            <CardMedia
                component="img"
                height="140"
                image="/meal-image.jpg"
                alt="meal example"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {mealData?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="meal-card__ingredients">
                   {mealData?.ingredients}
                </Typography>
            </CardContent>
            {showActions &&
                <CardActions>
                    <IconButton onClick={onUpdate}><EditIcon /></IconButton>
                    <IconButton onClick={onDelete}><DeleteIcon /></IconButton>
                </CardActions>
            }
        </Card>
    )
}

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

export const MealCard = () => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image="/meal-image.jpg"
                alt="meal example"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Chow Mein
                </Typography>
                <Typography variant="body2" color="text.secondary" className="meal-card__ingredients">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus consequat justo egestas molestie. Praesent egestas dictum tellus vel venenatis. Nullam finibus eros eros, mattis lacinia metus condimentum quis. In id euismod nunc. Pellentesque euismod posuere est non interdum. Cras feugiat viverra lectus, vitae fermentum leo mollis vel. 
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton><EditIcon /></IconButton>
                <IconButton><DeleteIcon /></IconButton>
            </CardActions>
        </Card>
    )
}

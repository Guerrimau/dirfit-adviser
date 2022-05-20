import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none"
                }
            }
        }
    },
    palette: {
        primary: {
            main: "#A541F7"
        }
    }
})
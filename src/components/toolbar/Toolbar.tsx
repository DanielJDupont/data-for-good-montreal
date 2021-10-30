import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar as ToolbarMUI,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";

export const Toolbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ToolbarMUI>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Data For Good Montreal
          </Typography>
          <Button color="inherit">Login</Button>
        </ToolbarMUI>
      </AppBar>
    </Box>
  );
};

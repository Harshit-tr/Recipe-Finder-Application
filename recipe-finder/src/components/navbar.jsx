import * as React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
// import ImageSlider from "./swipper";

const drawerWidth = 240;
const navItems = [
  { name: "Home", path: "/" },
  { name: "Recipes", path: "/recipes" },
  { name: "Categories", path: "/categories" },
  { name: "Favorites", path: "/favorites" },
  { name: "Contact", path: "/contact" },
];

function DrawerAppBar({ setSearch, window }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value); 
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Recipe App
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                textAlign: "center",
                backgroundColor:
                  location.pathname === item.path ? "#FF5722" : "transparent",
                color: location.pathname === item.path ? "#fff" : "inherit",
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: "#FF5722" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Recipe App
            </Typography>

            {/* Navigation Links */}
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "#fff",
                    backgroundColor:
                      location.pathname === item.path
                        ? "rgba(255,255,255,0.2)"
                        : "transparent",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            {/* Search Bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.2)",
                borderRadius: 1,
                padding: "2px 10px",
                marginLeft: { xs: 1, sm: 3 },
                width: { xs: "100px", sm: "200px" },
              }}
            >
              <SearchIcon />
              <InputBase
                placeholder="Search..."
                sx={{ ml: 1, color: "inherit", flex: 1 }}
                onChange={handleSearchChange} 
              />
            </Box>
          </Toolbar>
        </AppBar>

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>

        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    
    </>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
  setSearch: PropTypes.func.isRequired, // Ensure prop is required
};

export default DrawerAppBar;

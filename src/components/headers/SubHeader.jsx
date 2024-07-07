import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import axios from "axios";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import SubHeaderTextField from "./SubHeaderTextField";

function SubHeader(props) {
  const [state, setState] = useState(false);

  const [value, setValue] = useState(0);

  const { data: subHeader } = useQuery({
    queryKey: ["key"],
    queryFn: () => {
      return axios
        .get(
          "https://restly.deventure.ro/api/Product/InitRestaurantMenu?restaurantId=26"
        )
        .then((res) => res.data.data.menuCategories);
    },
    //...
  });

  return (
    <div>
      <Box
        className="subHeader__main"
        component="section"
        sx={{}}
      >
        <MenuOutlinedIcon
          className="burgerIcon"
          fontSize="small"
          onClick={() => {
            setState(true);
          }}
          sx={{
            "@media (min-width: 350px)": {
              marginTop: "10px",
            },
            alignItems: "center",
            display: { sm: "none" },
          }}
        />
        <SubHeaderTextField
          searchTerm={props.searchTerm}
          setSearchTerm={props.setSearchTerm}
          debouncedSearchTerm={props.debouncedSearchTerm}
        />

        <Tabs
          value={false}
          variant="scrollable"
          className="nav__links"
          sx={{
            padding: "5px 0px",
            ".css-1aquho2-MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          {subHeader?.map((link) => {
            return (
              <Tab
                key={link.id}
                sx={{
                  borderRadius: "50px",
                  backgroundColor: value === link.title ? "#00D9FF" : "#fff",
                  height:"5px",
                  fontSize:"16px",
                  fontWeight: value === link.title ? "600" : "inherit",
                  opacity: value === link.title ? "100%" : "60%",
                  color: value === link.title ? "black" : "inherit",
                  alignItems:"center",
                  "&.Mui-selected": {
                    color: "black",
                  },
                  display: {
                    xs: "none",
                    sm: "block",
                    padding:"20px 35px",
                    textTransform:"capitalize",
                    fontFamily:"montserrat"
                  },
                }}
                label={link.title}
                onClick={() => {
                  setValue(link.title);
                }}
              />
            );
          })}
        </Tabs>
      </Box>
      <Drawer
        anchor="top"
        onClose={() => {
          setState(false);
        }}
        open={state}
      >
        <List>
          {subHeader?.map((text) => (
            <ListItem
              key={text.id}
              disablePadding
              onClick={() => {
                setState(false);
              }}
            >
              <ListItemButton>
                <ListItemText primary={text.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
SubHeader.propTypes = {
  cartCount: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.string.isRequired,
  debouncedSearchTerm: PropTypes.string.isRequired,
};

export default SubHeader;

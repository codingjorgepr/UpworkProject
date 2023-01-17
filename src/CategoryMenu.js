import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

import { PRIMARY_GREEN } from "./StyledComponents";

export default function CategoryMenu({
  categories,
  selectedCategory,
  setSelectedCategory
}) {
  return (
    <MenuList>
      {categories.map((category) => (
        <MenuItem
          onClick={() => setSelectedCategory(category)}
          dense
          disableGutters
        >
          <ListItemText
            sx={category === selectedCategory ? { color: PRIMARY_GREEN } : {}}
          >
            {category}
          </ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
}

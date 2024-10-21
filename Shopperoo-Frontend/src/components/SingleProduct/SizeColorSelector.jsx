import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SizeColorSelector({
  color,
  sizes,
  quantity,
  handleChangeQuantity,
  handleChangeColor,
  handleChangeSizes,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <Box sx={{ minWidth: 100 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={quantity}
            label="Quantity"
            onChange={handleChangeQuantity}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 100 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Color</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={color}
            label="Color"
            onChange={handleChangeColor}
          >
            <MenuItem value="green">Green</MenuItem>
            <MenuItem value="black">Black</MenuItem>
            <MenuItem value="white">White</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 100 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sizes</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sizes}
            label="Sizes"
            onChange={handleChangeSizes}
          >
            <MenuItem value="S">S</MenuItem>
            <MenuItem value="M">M</MenuItem>
            <MenuItem value="L">L</MenuItem>
            <MenuItem value="XL">XL</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

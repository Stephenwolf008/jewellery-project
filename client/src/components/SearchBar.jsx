import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledAutocomplete = styled(Autocomplete)(() => ({
  "& .MuiInputBase-root": {
    borderRadius: 12,
    backgroundColor: "#FDFDFD", // ivoryWhite
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    border: "2px solid #0D5C63", // deepTeal
    padding: "4px 10px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiAutocomplete-option": {
    fontFamily: "Montserrat, sans-serif",
    color: "#0D5C63",
    "&:hover": {
      backgroundColor: "#CC9900", // warmGold
      color: "#FDFDFD", // ivoryWhite
    },
  },
}));

export default function SearchBar({ products, onSearchChange }) {
  const handleSelect = (event, value) => {
    onSearchChange(value?.name || "");
  };

  return (
    <StyledAutocomplete
      freeSolo
      options={products}
      getOptionLabel={(option) => option.name || ""}
      onInputChange={(event, newInputValue) => onSearchChange(newInputValue)}
      onChange={handleSelect}
      PaperComponent={({ children }) => (
        <Paper
          sx={{
            backgroundColor: "#FDFDFD",
            border: "1px solid #DDDEE2",
            borderRadius: 2,
            mt: 1,
          }}
        >
          {children}
        </Paper>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search our collection..."
          variant="outlined"
        />
      )}
    />
  );
}

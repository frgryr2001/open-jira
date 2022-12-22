import { Button, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import { useContext } from "react";
import { EntriesContext } from "../../context/entries/EntriesContext";
import { UIContext } from "../../context/ui";
export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const addingHandler = () => {
    setIsAddingEntry(true);
  };
  const cancelHandler = () => {
    setIsAddingEntry(false);
  };
  const onTextFieldChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setTouched(true);
  };

  const onSaved = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setInputValue("");
    setIsAddingEntry(false);
    setTouched(false);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginBottom: 1, marginTop: 2 }}
            placeholder="Add new entry"
            autoFocus
            multiline
            label="New Entry"
            helperText={
              touched && inputValue.length <= 0 && "Please enter a value"
            }
            error={touched && inputValue.length <= 0}
            value={inputValue}
            onChange={onTextFieldChanges}
          />
          <Box display="flex" justifyContent={"space-between"}>
            <Button variant="text" onClick={cancelHandler}>
              Canceled
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveIcon />}
              onClick={onSaved}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddIcon />}
          fullWidth
          variant="outlined"
          onClick={addingHandler}
        >
          Add new task
        </Button>
      )}
    </Box>
  );
};

import React from "react";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";

const TagAutocomplete = (props) => {
  return (
    <React.Fragment>
      <Autocomplete
        fullWidth
        multiple
        id="tags-filled"
        options={props.suggestions.map((option) => option.name)}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label=""
            placeholder={props.placeholder}
          />
        )}
      />
    </React.Fragment>
  );
};

export default TagAutocomplete;

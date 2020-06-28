import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";

import TagAutocomplete from "../TagAutocomplete";
import SelectAutocomplete from "../SelectAutocomplete";

const persons = [
  {
    value: "1",
    label: "Member 1",
  },
  {
    value: "2",
    label: "Member 2",
  },
  {
    value: "3",
    label: "Member 3",
  },
  {
    value: "4",
    label: "Member 4",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },

  formroot: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },

  suggestions: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },

  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

function PrescriptionForm() {
  const [problemTags, setProblemTags] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:8080/problems/";
    axios.get(apiUrl).then((response) => {
      console.log(response);
      setProblemTags(response.data || []);
    });
  }, []);
  const classes = useStyles();

  return (
    <form className={classes.formroot} noValidate autoComplete="off">
      <TagAutocomplete suggestions={problemTags} placeholder="Problem" />
      <SelectAutocomplete label="Add Family Member" optionsData={persons} />
      <TagAutocomplete suggestions={problemTags} placeholder="Medicines" />
    </form>
  );
}

export default PrescriptionForm;

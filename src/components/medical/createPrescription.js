import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";

import { setUploadFile } from "../../redux/uploadFile/uploadFile.actions";

import UploadProgress from "../../components/UploadProgress/UploadProgress";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
function CreatePrescription(props) {
  const handleAttachFIle = (e) => {
    // could do some validation for the attached file here
    props.setUploadFile(e.target.files);
    e.target.value = ""; // to clear the current file
  };
  const classes = useStyles();

  return (
    <div className="">
      <header className="App-header">
        <img />
        <input type="file" multiple onChange={handleAttachFIle} />
      </header>
      <UploadProgress />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUploadFile: (files) => dispatch(setUploadFile(files)),
});

export default connect(null, mapDispatchToProps)(CreatePrescription);

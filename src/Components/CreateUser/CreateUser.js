import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormControl } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Button } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { TextField } from "@mui/material";
import { Checkbox } from "@mui/material";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import usersOperations from "../../redux/users/usersOperations.js";
import style from "./createUser.module.css";

const CreateUser = () => {
  const dispatch = useDispatch();

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [birth_date, setBirth_date] = useState("");
  const [gender, setGender] = useState("");
  const [job, setJob] = useState("");
  const [biography, setBiography] = useState("");
  const [is_active, setIs_active] = useState(false);

  const [first_name_err, setFirst_name_err] = useState("");
  const [last_name_err, setLast_name_err] = useState("");
  const [job_err, setJob_err] = useState("");
  const [biography_err, setBiography_err] = useState("");

  const handleSubmit = () => {
    dispatch(
      usersOperations.addUser({
        first_name,
        last_name,
        birth_date,
        gender,
        job,
        biography,
        is_active,
      })
    );
  };

  return (
    <FormControl fullWidth>
      {first_name_err ? (
        <div style={{ color: "red" }}>{first_name_err} </div>
      ) : (
        ""
      )}
      <TextField
        value={first_name}
        onChange={(e) => {
          setFirst_name(e.target.value);
          if (e.target.value.length > 256) {
            setFirst_name_err("Имя не должно превышать 256 символов");
          } else setFirst_name_err("");
        }}
        margin="dense"
        id="outlined-basic"
        label="First name"
        variant="outlined"
      />
      {last_name_err ? (
        <div style={{ color: "red" }}>{last_name_err} </div>
      ) : (
        ""
      )}
      <TextField
        margin="dense"
        id="outlined-basic"
        label="Last name"
        variant="outlined"
        value={last_name}
        onChange={(e) => {
          setLast_name(e.target.value);
          if (e.target.value.length > 256) {
            setLast_name_err("Фамилия не должна превышать 256 символов");
          } else setLast_name_err("");
        }}
      />
    
      <div className={style.calendar}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date of Birthday"
            value={birth_date}
            onChange={(newValue) => {
              setBirth_date(newValue.toLocaleDateString('fr-CA'));
            }}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div className={style.gender}>
        <Select
          fullWidth
          variant="outlined"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <MenuItem value={"male"}>male</MenuItem>
          <MenuItem value={"female"}>female</MenuItem>
        </Select>
      </div>
      {job_err ? <div style={{ color: "red" }}>{job_err} </div> : ""}
      <TextField
        value={job}
        onChange={(e) => {
          setJob(e.target.value);
          if (e.target.value.length > 256) {
            setJob_err("Описание не должно превышать 256 символов");
          } else setJob_err("");
        }}
        margin="dense"
        id="outlined-basic"
        label="Job"
        variant="outlined"
      />
      {biography_err ? (
        <div style={{ color: "red" }}>{biography_err} </div>
      ) : (
        ""
      )}
      <TextField
        value={biography}
        onChange={(e) => {
          setBiography(e.target.value);
          if (e.target.value.length > 1024) {
            setBiography_err("Описание не должно превышать 1024 символов");
          } else setBiography_err("");
        }}
        margin="dense"
        id="outlined-basic"
        label="Biography"
        variant="outlined"
      />
      <FormControlLabel
        label="is Active"
        control={
          <Checkbox
            value={is_active}
            onChange={(e) => {
              setIs_active(!is_active);
            }}
          />
        }
      />
      <Button onClick={handleSubmit} variant="contained">
        Create
      </Button>
    </FormControl>
  );
};

export default CreateUser;

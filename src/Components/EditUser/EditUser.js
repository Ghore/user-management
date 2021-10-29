import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Button } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { TextField } from "@mui/material";
import { Checkbox } from "@mui/material";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import usersOperations from "../../redux/users/usersOperations.js";
import style from "./editUser.module.css";
const EditUser = ({ ...props }) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const editUser = useSelector((state) => state.users.detail_user);

  const [first_name, setFirst_name] = useState(editUser.first_name);
  const [last_name, setLast_name] = useState(editUser.last_name);
  const [birth_date, setBirth_date] = useState(editUser.birth_date);
  const [gender, setGender] = useState(editUser.gender);
  const [job, setJob] = useState(editUser.job);
  const [biography, setBiography] = useState(editUser.biography);
  const [is_active, setIs_active] = useState(editUser.is_active);

  const [first_name_err, setFirst_name_err] = useState("");
  const [last_name_err, setLast_name_err] = useState("");
  const [job_err, setJob_err] = useState("");
  const [biography_err, setBiography_err] = useState("");

  const handleEdit = () => {
    dispatch(
      usersOperations.updateUser({
        first_name,
        last_name,
        birth_date,
        gender,
        job,
        biography,
        is_active,
        id,
      })
    );
  };
  return (
    <>
      <FormControl fullWidth>
        {first_name_err ? (
          <div style={{ color: "red" }}>{first_name_err} </div>
        ) : (
          ""
        )}
        <TextField
          required
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
          required
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
              mask="____/__/__"
              required
              label="Date of Birthday"
              value={birth_date}
              onChange={(newValue) => {
                setBirth_date(newValue.toLocaleDateString("fr-CA"));
              }}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className={style.gender}>
          <Select
            fullWidth
            required
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
          required
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
          required
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
            is_active ? (
              <Checkbox
                defaultChecked
                required
                value={is_active}
                onChange={(e) => {
                  setIs_active(!is_active);
                }}
              />
            ) : (
              <Checkbox
                required
                value={is_active}
                onChange={(e) => {
                  setIs_active(!is_active);
                }}
              />
            )
          }
        />
        <Button onClick={handleEdit} variant="contained">
          Edit
        </Button>
      </FormControl>
    </>
  );
};

export default EditUser;

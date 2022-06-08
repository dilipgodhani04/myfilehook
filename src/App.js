import React from "react";
// import hero from "./assets/3.svg";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  InputLabel,
  Switch,
  Select,
  MenuItem,
  Button,
} from "@@mui/material";


import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
}));

const App = () => {
  const classes = useStyles();
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="box">
      <div className="box-primary">
     
      </div>
      <div className="box-secondary">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 1) TextField */}
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="firstName"
            inputRef={register}
          />

          {/* 2) TextField */}
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="lastName"
            inputRef={register}
          />

          {/* 3) TextField */}
          <TextField
            placeholder="Enter Your E-mail Address"
            label="E-mail"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="email"
            inputRef={register}
          />

          {/* 4) TextField */}
          <TextField
            placeholder="Enter Your Phone Number"
            label="Phone"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="phone"
            inputRef={register}
          />

          
        
           

          {/* Radio Buttons */}
          <FormControl className={classes.inputField}>
            <FormLabel>Choose Your Gender</FormLabel>
            <RadioGroup row name="gender">
              <FormControlLabel
                value="female"
                control={<Radio inputRef={register} />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio inputRef={register} />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio inputRef={register} />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          {/* Select */}
          <FormControl fullWidth className={classes.inputField}>
            <InputLabel id="demo-simple-select-label">
              Select Your Course
            </InputLabel>
            {/* <Controller
              as={
                <Select>
                  <MenuItem value="">Choose your course</MenuItem>
                  <MenuItem value="Web Development">Web Development</MenuItem>
                  <MenuItem value="App Development">App Development</MenuItem>
                  <MenuItem value="UI/UX">UI/UX</MenuItem>
                </Select>
              }
              name="course"
              control={control}
              defaultValue=""
            /> */}
            <Controller
              render={(props) => (
                <Select value={props.value} onChange={props.onChange}>
                  <MenuItem value="">Choose your course</MenuItem>
                  <MenuItem value="Web Development">Web Development</MenuItem>
                  <MenuItem value="App Development">App Development</MenuItem>
                  <MenuItem value="UI/UX">UI/UX</MenuItem>
                </Select>
              )}
              name="course"
              control={control}
              defaultValue=""
            />
          </FormControl>

          {/*  Switch */}
          <FormControlLabel
            className={classes.inputField}
            control={<Switch inputRef={register} name="notification" />}
            label="Send me regular updates"
          />

          {/* Checkbox */}
          <FormControlLabel
            style={{ display: "block", marginBottom: 15 }}
            control={<Checkbox name="tnc" inputRef={register} />}
            label="I aggree all terms and conditions"
          />

          <Button variant="contained" color="primary" type="submit">
            create new account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default App;

import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@mui/material'

const UserDetails = ({ nextStep, handleChange, values }) => {
  const { email, name } = values;
  // const { name } = values;
  const [nameError, setNameError] = React.useState(false);

  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    if (!nameValidation()) {
      // setNameError(true);
      alert("Please enter your name")
      return;
    }

    setNameError(false);
    if (!emailValidation()) {
      alert("Enter valid email id")
      return;
    }
    nextStep();
  }
  const emailValidation = () => {
    // Email validation logic
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const nameValidation = () => {
    return name.trim() !== '';
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* email address */}
            <Grid item xs={12}>
              <TextField
                placeholder="Email Address"
                label="Email Address"
                onChange={handleChange('email')}
                defaultValue={values.email}
                // variant="outlined"
                autoComplete="email"
                fullWidth
                type="email"

              />
            </Grid>
            <br />
            {/* username */}
            <Grid item xs={12}>
              <TextField
                placeholder="Name"
                label="Name"
                onChange={handleChange('name')}
                defaultValue={values.name}
                // variant="outlined"
                autoComplete="name"
                fullWidth
              />
            </Grid>
            <br />
            {/* password */}
            <Grid item xs={12}>
              <TextField
                placeholder="Phone"
                label="Phone"
                onChange={handleChange('phone')}
                defaultValue={values.phone}
                // variant="outlined"
                autoComplete="phone"
                fullWidth
                type="number"
                error={nameError}
              />
            </Grid>
          </Grid>
          <br />
          <Button
            onClick={Continue}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default UserDetails

import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@mui/material'

const ContactInformation = ({ nextStep, handleChange, values }) => {

  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Emergency Contact Information
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* email address */}
            <Grid item xs={12}>
              <TextField
                placeholder="Emergency Contact Information"
                label="Emergency Contact Information"
                onChange={handleChange('emergency_contact')}
                defaultValue={values.emergency_contact}
                // variant="outlined"
                autoComplete="number"
                type="number"
                fullWidth

              />
            </Grid>
            <br />
            {/* password */}

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

export default ContactInformation

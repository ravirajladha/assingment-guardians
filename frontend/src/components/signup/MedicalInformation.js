import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@mui/material'

const MedicalInformation = ({ nextStep, handleChange, values }) => {

  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Medical Information
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* email address */}
            <Grid item xs={12}>
              <TextField
                placeholder="Allergies"
                label="Allergies"
                onChange={handleChange('allergies')}
                defaultValue={values.allergies}
                // variant="outlined"
                autoComplete="text"
                fullWidth

              />
            </Grid>
            <br />
            {/* username */}
            <Grid item xs={12}>
              <TextField
                placeholder="Current Medications"
                label="Current Medications"
                onChange={handleChange('medications')}
                defaultValue={values.medications}
                // variant="outlined"
                autoComplete="medications"
                fullWidth
              />
            </Grid>
            <br />
            {/* password */}
            <Grid item xs={12}>
              <TextField
                placeholder="Medical Conditions"
                label="Medical Conditions"
                onChange={handleChange('conditions')}
                defaultValue={values.conditions}
                // variant="outlined"
                autoComplete="conditions"
                fullWidth
              // type="number"
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

export default MedicalInformation

import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@mui/material'

const ReviewForm = ({ prevStep, nextStep, handleChange, values }) => {
  const { review } = values
  const [reviewError, setReviewError] = React.useState(false);

  const Continue = e => {
    e.preventDefault();
    if (!reviewValidation()) {

      alert("Please enter review")
      return;
    }

    nextStep();
  }

  const Previous = e => {
    e.preventDefault();

    prevStep();
  }

  const reviewValidation = () => {
    return review.trim() !== '';
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Review
        </Typography>
        <form>
          <Grid container spacing={2}>

            {/* first name */}
            <Grid item xs={12} sm={12}>
              <TextField
                placeholder="Review *"
                label="Review *"
                onChange={handleChange('review')}
                defaultValue={values.review}
                error={reviewError}
              />
              <span style={{ color: 'red' }}>*</span>
            </Grid>
            <br />
            <Grid item xs={12} sm={6}>
              <Button
                onClick={Previous}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={Continue}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default ReviewForm


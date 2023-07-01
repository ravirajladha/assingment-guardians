import React from 'react';
import { Container, Grid, List, ListItem, ListItemText, Button } from '@mui/material';

const Confirmation = React.memo(({ prevStep, nextStep, values }) => {
  console.log(values);
  const { name, email, phone, allergies, conditions, medications, emergency_contact, review } = values;
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };


  return (
    <Container component="main" maxWidth="xs">
      <div>
        <List>
          <ListItem>
            <ListItemText primary="Name" secondary={name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone" secondary={phone} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Allergies" secondary={allergies} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Medical Conditions" secondary={conditions} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Medications" secondary={medications} />

          </ListItem>

          <ListItem>
            <ListItemText primary="Emergency Contact" secondary={emergency_contact} />
          </ListItem>

          <ListItem>
            <ListItemText primary="Review" secondary={review} />
          </ListItem>

        </List>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={Previous}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Edit
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
              Final Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
})

export default Confirmation

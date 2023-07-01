import React, { Component } from 'react'
import UserDetails from './UserDetails'
import ReviewForm from './ReviewForm'
import MedicalInformation from './MedicalInformation'
import ContactInformation from './ContactInformation'

import Confirmation from './Confirmation'
import Success from './Success'

export default class Signup extends Component {

  state = {
    step: 1,
    name: '',
    email: '',
    phone: '',
    allergies: '',
    medications: '',
    conditions: '',
    emergency_contact: '',
    review: '',


  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { name, email, phone, allergies, conditions, medications, emergency_contact, review } = this.state;
    const values = { name, email, phone, allergies, conditions, medications, emergency_contact, review }

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <MedicalInformation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <ContactInformation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 4:
        return (
          <ReviewForm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 5:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        )
      case 6:
        return (
          <Success />
        )
      default:
      // do nothing
    }
  }
}

import React from "react";
import uniqid from "uniqid";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import ReactToPrint from 'react-to-print';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      personalInfo: {
        firstName: 'First Name',
        lastName: 'Last Name',
        positionTitle: 'Position',
        photoURL: '',
        adress: 'Adress',
        phoneNumber: '602000000',
        email: 'email',
        description: 'description'
      },
      educations: [],
      education: {
        id: uniqid(),
        name: 'Name',
        city: 'city',
        degree: 'degree',
        subject: 'subject',
        from: 'from',
        to: 'to'
      },
      experiences: [],
      experience: {
        id: uniqid(),
        position: 'Position',
        company: 'Company',
        city: 'City',
        from: 'from',
        to: 'to'
      }
    }
  }

  handleInput = (e, key) => {
    this.setState({
      personalInfo:{
        firstName: this.state.personalInfo.firstName,
        lastName: this.state.personalInfo.lastName,
        positionTitle: this.state.personalInfo.positionTitle,
        photoURL: this.state.personalInfo.photoURL,
        adress: this.state.personalInfo.adress,
        phoneNumber: this.state.personalInfo.phoneNumber,
        email: this.state.personalInfo.email,
        description: this.state.personalInfo.description,
        [key]: e.target.value,
      }
    })
  }

  addEducation = (e) => {
    e.preventDefault();
    this.setState({
      educations: this.state.educations.concat(this.state.education),
      education: { 
        id: uniqid(),
        name: 'Name',
        city: 'city',
        degree: 'degree',
        subject: 'subject',
        from: 'from',
        to: 'to'
      },
    })
  }

  removeEducation = (eduID) => {
    this.setState({
      educations: this.state.educations.filter((edu) => eduID !== edu.id),
    })
  }

  changeEducation = (e, eduToEdit, key) => {
    eduToEdit[key] = e.target.value
    this.setState({
      educations: this.state.educations.map((edu) => eduToEdit.id === edu.id ? eduToEdit : edu)
    })
    console.log(eduToEdit)
  }

  addExperience = (e) => {
    e.preventDefault();
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
      experience: {
        id: uniqid(),
        position: 'Position',
        company: 'Company',
        city: 'City',
        from: 'from',
        to: 'to'
      } ,
    })
  }

  removeExperience = (expID) => {
    this.setState({
      experiences: this.state.experiences.filter((exp) => expID !== exp.id),
    })
  }

  changeExperience = (e, expToEdit, key) => {
    expToEdit[key] = e.target.value
    this.setState({
      experiences: this.state.experiences.map((exp) => expToEdit.id === exp.id ? expToEdit : exp)
    })
  }

  handleImage = (e) => {
    const file = e.target.files[0]
    console.log(file)
    this.setState({personalInfo: {
      firstName: this.state.personalInfo.firstName,
      lastName: this.state.personalInfo.lastName,
      positionTitle: this.state.personalInfo.positionTitle,
      adress: this.state.personalInfo.adress,
      phoneNumber: this.state.personalInfo.phoneNumber,
      email: this.state.personalInfo.email,
      description: this.state.personalInfo.description,
      photoURL: URL.createObjectURL(file)
      } 
    })
  }


  render() {

    return (
      <div>
        <CVForm
          info={this.state.personalInfo}
          educations={this.state.educations}
          handleInput={this.handleInput}
          addEducation={this.addEducation}
          removeEducation={this.removeEducation}
          changeEducation={this.changeEducation}
          experiences={this.state.experiences}
          addExperience={this.addExperience}
          removeExperience={this.removeExperience}
          changeExperience={this.changeExperience}
          handleImage={this.handleImage}
        ></CVForm>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <button id="print-btn">Print this out!</button>;
          }}
          content={() => this.componentRef}
        />
        <CVPreview
          info={this.state.personalInfo}
          educations={this.state.educations}
          experiences={this.state.experiences}
          ref={el => (this.componentRef = el)}
        >

        </CVPreview>
      </div>
    );
  }
}

export default App
import React from "react";

class CVPreview extends React.Component{

  render(){
    const educations = this.props.educations
    const experiences = this.props.experiences
    return (
      <div className="cv-preview">
        <div className="header">
          <h2 style={{fontWeight:"bolder"}}>{this.props.info.firstName} {this.props.info.lastName}</h2>
          <h4>{this.props.info.positionTitle}</h4>
        </div>
        <div className="main-container">
          
          <div className="left-container">
            <h3>Description: </h3>
            <p>{this.props.info.description}</p>
            <h3>Education:</h3>
            {educations.map((edu) => {
              return (
                <div className="education" key={edu.id}>
                  <div>
                    <h4>{edu.from} - {edu.to}</h4>
                  </div>
                  <div>
                    <h4>{edu.name}, {edu.city}</h4>
                    <p>Degree: {edu.degree}</p>
                    <p>Subject: {edu.subject}</p>
                  </div>
                </div>
              )
            })}
            <h3>Experience:</h3>
            {experiences.map((exp) => {
              return (
                <div className="experience" key={exp.id}>
                  <div>
                    <h4>{exp.from} - {exp.to}</h4>
                  </div>
                  <div>
                    <h4>{exp.position}</h4>
                    <p>{exp.company}, {exp.city}</p>
                  </div>
                </div>
              )
            })}
            
          </div>
          <div className="right-container">
            <img src={this.props.info.photoURL} alt="" width='170px'/>
            <h3>Personal Details</h3>
            <h4>Adress:</h4>
            <p>{this.props.info.adress}</p>
            <h4>Phone Number: </h4>
            <p>{this.props.info.phoneNumber}</p>
            <h4>Email: </h4>
            <p>{this.props.info.email}</p>
          </div>
        </div>

      </div>
    )
  }
}

export default CVPreview
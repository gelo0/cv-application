import React from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";

class CVForm extends React.Component{
  render(){
    return (
      <div className="cv-form">
        <PersonalInfo
          info={this.props.info}
          handleInput={this.props.handleInput}
          handleImage={this.props.handleImage}>
        </PersonalInfo>
        <Education
          educations={this.props.educations}
          addEducation={this.props.addEducation}
          removeEducation={this.props.removeEducation}
          changeEducation={this.props.changeEducation}>
        </Education>
        <Experience
          experiences={this.props.experiences}
          addExperience={this.props.addExperience}
          removeExperience={this.props.removeExperience}
          changeExperience={this.props.changeExperience}>
        </Experience>

      </div>
    )
  }
}

export default CVForm
import React from "react";

class Education extends React.Component {
  render() {
    const educations = this.props.educations
    return (
      <div className="education-form"><h2>Education</h2>
        {educations.map((edu) => {
          return (
            <div key={edu.id}>  
              <div>
                <label>Name 
                <input
                  onInput={(e) => this.props.changeEducation(e, edu, 'name')}
                  placeholder={edu.name}
                  type="text"/>
                </label>
              </div>
              <div>
                <label>City
                <input
                  onInput={(e) => this.props.changeEducation(e, edu, 'city')}
                  placeholder={edu.city}
                  type="text"/>
                </label>
              </div>
              <div>
                <label>Degree
                <input
                onInput={(e) => this.props.changeEducation(e, edu, 'degree')}
                  placeholder={edu.degree}
                  type="text"/>
                </label>
              </div>
              <div>
                <label>Subject
                <input
                  onInput={(e) => this.props.changeEducation(e, edu, 'subject')}
                  placeholder={edu.subject}
                  type="text"/>
                </label>
              </div>
              <div>
                <label>Date from
                <input
                  onInput={(e) => this.props.changeEducation(e, edu, 'from')}
                  placeholder={edu.from}
                  type="text"/>
                </label>
                <label>Date to
                <input
                  onInput={(e) => this.props.changeEducation(e, edu, 'to')}
                  placeholder={edu.to}
                  type="text"/>
                </label>
              </div>
              <button
                onClick={() => this.props.removeEducation(edu.id)}>REMOVE
              </button>
            </div>
          )
        })}
        <button onClick={(e) => this.props.addEducation(e)}>ADD</button>
      </div>
    )
  }
}

export default Education
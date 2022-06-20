import React from "react";

class Experience extends React.Component {

  render() {
    const experiences = this.props.experiences
    return (
      <div className="experience-form"><h2>Experience</h2>
        {experiences.map((exp) => {
          return (
            <div key={exp.id}>
              <div>
                <label>Position 
                <input
                  onInput={(e) => this.props.changeExperience(e, exp, 'position')}
                  placeholder={exp.position}
                  type="text"/>
                </label>
              </div>
              <div>
                <label>Company 
                <input
                  onInput={(e) => this.props.changeExperience(e, exp, 'company')}
                  placeholder={exp.company}
                  type="text"/>
                </label>
              </div>
              <div>
                <label>City 
                <input
                  onInput={(e) => this.props.changeExperience(e, exp, 'city')}
                  placeholder={exp.city}
                  type="text"/>
                </label>
              </div>
              <div>
                <label>Date from
                <input
                  onInput={(e) => this.props.changeExperience(e, exp, 'from')}
                  placeholder={exp.from}
                  type="text"/>
                </label>
                <label>Date to
                <input
                  onInput={(e) => this.props.changeExperience(e, exp, 'to')}
                  placeholder={exp.to}
                  type="text"/>
                </label>
              </div>
              <button
                onClick={() => this.props.removeExperience(exp.id)}>REMOVE
              </button>
            </div>
          )
        })}
        <button onClick={(e) => this.props.addExperience(e)}>ADD</button>
      </div>
    )
  }
}

export default Experience
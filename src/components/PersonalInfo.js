import React from "react";

class PersonalInfo extends React.Component{
  render(){
    return(
      <div className="personal-info-form">
        <div>
          <h2>Personal Information</h2>
          <label>First Name
          <input
            onInput={(e) => this.props.handleInput(e, 'firstName')}
            placeholder={this.props.info.firstName}
            type="text"/>
          </label>
        </div>
        <div>
          <label>Last Name
          <input
            onInput={(e) => this.props.handleInput(e, 'lastName')}
            placeholder={this.props.info.lastName}
            type="text"/>
          </label>
        </div>
        <div>
          <label>Position
          <input
            onInput={(e) => this.props.handleInput(e, 'positionTitle')}
            placeholder={this.props.info.positionTitle}
            type="text"/>
          </label>
        </div>
        <div>
          <label>Adress
          <input
            onInput={(e) => this.props.handleInput(e, 'adress')}
            placeholder={this.props.info.adress}
            type="text"/>
          </label>
        </div>
        <div>
          <label>Phone
          <input
            onInput={(e) => this.props.handleInput(e, 'phoneNumber')}
            placeholder={this.props.info.phoneNumber}
            type="text"/>
          </label>
        </div>
        <div>
          <label>Email
          <input
            onInput={(e) => this.props.handleInput(e, 'email')}
            placeholder={this.props.info.email}
            type="text"/>
          </label>
        </div>
        <div>
          <label>Description
          <input
            onInput={(e) => this.props.handleInput(e, 'description')}
            placeholder={this.props.info.description}
            type="text"/>
          </label>
        </div>

        <div>
          <label>Photo
          <input 
            type='file' 
            label='Upload' 
            accept='image/*'
            onChange={(e) => this.props.handleImage(e)} 
          />
          </label>
        </div>
      </div>
    )
  }
}

export default PersonalInfo
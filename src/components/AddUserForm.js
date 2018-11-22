import React from "react";
import { reduxForm, Field } from "redux-form";

class AddUserForm extends React.Component {
  static propTypes = {};

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h3>Add User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            Email:
            <Field name="email" component="input" />
          </div>
          <div>
            First name:
            <Field name="firstName" component="input" type="text" />
          </div>
          <div>
            Last name:
            <Field name="lastName" component="input" type="text" />
          </div>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "addUser"
})(AddUserForm);

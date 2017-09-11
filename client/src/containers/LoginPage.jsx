import React from 'react';
import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: '',
        password: '',
      },
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  processForm(event) {
    event.preventDefault();

    const email = encodeURIComponent(this.state.email);
    const password = encodeURIComponent(this.state.password);
    const formData = `email=${email}&password=${password}`;

    fetch('/auth/login', {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            errors: {},
          });

          console.log('the form is valid');
        } else {
          response.json().then((json) => {
            const errors = json.errors ? json.errors : {};
            errors.summary = json.message;

            this.setState({
              errors,
            });
          });
        }
      });
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

export default LoginPage;

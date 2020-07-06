import React, { Component } from 'react';
import ReactModalLogin from 'react-modal-login';
import {facebookConfig, googleConfig} from "./social-config";
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      loggedIn: null,
      loading: false,
      error: null,
      initialTab: null,
      recoverPasswordSuccess: null,
    };

  }

  onLogin() {
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    if (!email || !password) {
      this.setState({
        error: true
      })
    } else {
      this.onLoginSuccess('form')
    }
  }

  onRegister() {
    const login = document.querySelector('#login').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    if (!login || !email || !password) {
      this.setState({
        error: true
      })
    } else {
      this.onLoginSuccess('form')
    }
  }

  onRecoverPassword() {
    const email = document.querySelector('#email').value

    if (!email) {
      this.setState({
        error: true,
        recoverPasswordSuccess: false
      })
    } else {
      this.setState({
        error: null,
        recoverPasswordSuccess: true
      });
    }
  }

  openModal(initialTab) {
    this.setState({
      initialTab: initialTab
    }, () => {
      this.setState({
        showModal: true,
      })
    });
  }

  onLoginSuccess(method, response) {

    this.closeModal();
    this.setState({
      loggedIn: method,
      loading: false
    })
  }

  onLoginFail(method, response) {

    this.setState({
      loading: false,
      error: response
    })
  }

  startLoading() {
    this.setState({
      loading: true
    })
  }

  finishLoading() {
    this.setState({
      loading: false
    })
  }

  afterTabsChange() {
    this.setState({
      error: null,
      recoverPasswordSuccess: false,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null,
    });
    window.location.href = '/';
  }

  render() {

    const loggedIn = this.state.loggedIn;
    const isLoading = this.state.loading;

    return (
      <div>

        <ReactModalLogin
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={isLoading}
          initialTab={this.state.initialTab}
          error={this.state.error}
          tabs={{
            afterChange: this.afterTabsChange.bind(this)
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          form={{
            onLogin: this.onLogin.bind(this),
            onRegister: this.onRegister.bind(this),
            onRecoverPassword: this.onRecoverPassword.bind(this),

            recoverPasswordSuccessLabel: this.state.recoverPasswordSuccess
              ? {
                  label: "New password has been sent to your mailbox!"
                }
              : null,
            recoverPasswordAnchor: {
              label: "Forgot your password?"
            },
            loginBtn: {
              label: "Sign in"
            },
            registerBtn: {
              label: "Sign up"
            },
            recoverPasswordBtn: {
              label: "Send new password"
            },
            loginInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: 'Email',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Password',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: 'Password',
              }
            ],
            registerInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Nickname',
                type: 'text',
                inputClass: 'RML-form-control',
                id: 'login',
                name: 'login',
                placeholder: 'Nickname',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: 'Email',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Password',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: 'Password',
              }
            ],
            recoverPasswordInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: 'Email',
              },
            ],
          }}
          separator={{
            label: "or"
          }}
          providers={{
            facebook: {
              config: facebookConfig,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              inactive: isLoading,
              label: "Continue with Facebook"
            },
            google: {
              config: googleConfig,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              inactive: isLoading,
              label: "Continue with Google"
            }
          }}
        />
        {loggedIn}
      </div>
    )
  }
}

export default Login
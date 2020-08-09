import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '807357286986-lrfumo7tk3vjr553i6v3h70c9pr6om2c.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return (
      <div>Google Auth</div>
    )
  }
}

export default GoogleAuth;
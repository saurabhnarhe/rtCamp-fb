import React, { Component } from 'react';
import FacebookLoginButton from "./FacebookLoginButton";

class App extends Component {
  state = {
    username: null
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
      console.log(resultObject);
    } else {
      alert("Facebook login error");
    }
  };

  render() {
    const { username } = this.state;

    return (
      <div className="App">
        <div className="App-intro">
          {!username &&
            <div>
              <FacebookLoginButton onLogin={this.onFacebookLogin}>
                <button>Facebook</button>
              </FacebookLoginButton>
            </div>
          }
          {username &&
            <p>Welcome back, {username}</p>
          }
        </div>
      </div>
    );
  }
}

export default App;
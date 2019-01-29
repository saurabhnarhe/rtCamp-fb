import React, { Component } from 'react';
import FacebookLoginButton from "./FacebookLoginButton";
import AdvancedGridList from './Gallary/GridList';
import './css/app.scss'
import config from './config';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import fblogo from './images/fblogo.png';
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  card: {
    display: "flex",
    minWidth: 300
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  logo: {
    height: 80,
    width: 80,
    marginTop: 10,
    cursor: "pointer"
  },
  progess: {
    height: 50,
    width: 50,
    marginTop: 25,
    marginRight: 10,
    marginLeft: 70
  }
};

class App extends Component {
  state = {
    username: null,
    subtitle: "Your fb albums on-the-go"
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name,
        resultObject: resultObject
      });
      fetch(`${config.BACKEND_URL}/zip-files`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: this.state.resultObject.user.albums.data,
          username: this.state.resultObject.user.name.split(" ").join("-")
        })
      }).then(d => {
        console.log("done snding:", d);
      });
      console.log(resultObject);
    } else {
      alert("Facebook login error");
    }
  };

  onClick = e => {
    this.setState({ clicked: true, subtitle: "Logging you in..." });
  };

  render() {
    const { username } = this.state;

    return (
      <div className="App">
        {!username && (
          <Card style={styles.card}>
            <div style={styles.details}>
              <CardContent style={styles.content}>
                <Typography component="h4" variant="h4">
                  Pixels
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {this.state.subtitle}
                </Typography>
              </CardContent>
            </div>

            <FacebookLoginButton
              onLogin={this.onFacebookLogin}
              onClick={this.onClick}
            >
              {!this.state.clicked && (
                <CardMedia style={styles.logo} image={fblogo} />
              )}
              {this.state.clicked && (
                <CircularProgress style={styles.progess} />
              )}
            </FacebookLoginButton>
          </Card>
        )}
        <div className="main-container">{username && <AdvancedGridList />}</div>
      </div>
    );
  }
}

export default App;
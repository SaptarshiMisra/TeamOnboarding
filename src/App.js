import React from "react";
import fire from "./Fire";
import Login from "./Login";
import DispalyKanban from "./DisplayKanban";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      //   console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem("user");
      }
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.user ? <DispalyKanban /> : <Login />}
      </div>
    );
  }
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./style/app.css";
import App from "./components/App";
import userContext from "./components/userContext";


class MainApp extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render(){
    // console.log(userContext)
    return (
      <userContext.Provider value={{isDarkMode: this.state.isDarkMode,changeMode : this.changeMode}} >
        <App isDarkMode={this.state.isDarkMode}  />
      </userContext.Provider>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
      <MainApp />
  </React.StrictMode>,
  document.getElementById("root")
);

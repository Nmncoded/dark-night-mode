import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import userContext from "./userContext";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }
  static contextType = userContext;
  render() {
    // console.log(this.context);
    let { isDarkMode } = this.props;
    return (
      
      <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <Header isDarkMode={isDarkMode} />
        <Main isDarkMode={isDarkMode} />
        <SwitchButton isDarkMode={isDarkMode} changeMode={this.context.changeMode} />
      </div>
      
    );
  }
}

export default App;

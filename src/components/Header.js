import React from "react";

class Header extends React.Component {
  render() {
    return(
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee User Directory</h1>
          <p> Filter through the user directory by employees firs or last name or department or </p>
        </div>
      </div>
    )
  }
}

export default Header;
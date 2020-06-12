import React from 'react';
import Table from "./components/Table"
import Header from "./components/Header"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: []
    }
    console.log("constructed")
  }


  componentDidMount(){
    console.log("employees db")
    fetch("https://alper.dev/employees")
      .then(response => {
        return response.json()
      })
      .then(res => {
        this.setState({employees: res })
      })
    }

render() {
  console.log(this.state.employees)
  if(!this.state.employees[0]) {
    return (
      <>
        <Header />
        <h3>Loading...</h3>
      </>
    )
  }else {
    return (
    <>
      <Header />
      <div className="container">
        <Table employees={this.state.employees} />
      </div>
    </>
    )
  }
}
}
export default App;
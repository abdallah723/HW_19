import React from "react";
import Employees from "./Employees"

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: this.props.employees,
    }
}

  filterDepartments(department){
    let newEmployeesArray = this.props.employees.filter(employee => employee.department === department);
    this.setState({
      employees: newEmployeesArray
    })
  }

  allDepartments(){
    let allEmployees = this.props.employees
    this.setState({
      employees: allEmployees
    })
  }

  sortEmployees(param, direction){
    let newEmployeesArray = this.state.employees
    if (direction === "up"){
      newEmployeesArray.sort((a, b) => (a[param] > b[param]) ? 1 : -1)
    } else (
      newEmployeesArray.sort((a, b) => (a[param] < b[param]) ? 1 : -1)
    )

  this.setState({
     employees: newEmployeesArray
    })
  }
  render() {
    console.log(this.state.employees)
    const buttonStyles = {
      fontSize: ".5em",
      border: "none",
      padding: ".2em",
    };
    return(
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              ID
              <button className="btn btn-link m-1" style={buttonStyles} onClick={() => this.sortEmployees("id", "up")}>
                <i className="fa fa-arrow-up"></i>
              </button>
              <button className="btn btn-link m-1" style={buttonStyles} onClick={() => this.sortEmployees("id", "down")}>
                <i className="fa fa-arrow-down"></i>
              </button>
            </th>

            <th scope="col">
              First Name
              <button className="btn btn-link m-1" style={buttonStyles} onClick={() => this.sortEmployees("firstName", "up")}>
                <i className="fa fa-arrow-up"></i>
              </button>
              <button className="btn btn-link m-1" style={buttonStyles} onClick={() => this.sortEmployees("firstName", "down")} >
                <i className="fa fa-arrow-down"></i>
              </button>
            </th>

            <th scope="col">
              Last Name
              <button className="btn btn-link m-1" style={buttonStyles} onClick={() => this.sortEmployees("lastName", "up")}>
                <i className="fa fa-arrow-up"></i>
              </button>
              <button className="btn btn-link m-1" style={buttonStyles} onClick={() => this.sortEmployees("lastName", "down")} >
                <i className="fa fa-arrow-down"></i>
              </button>
            </th>

            <th scope="col">
              Department
                <button className="btn btn-warning" onClick={this.allDepartments.bind(this)}>View All</button>
            </th>

            <th scope="col">
              Email Address
            </th>

            <th scope="col">
              Location
            </th>
          </tr>
        </thead>
        {this.state.employees.map(employee => (
          <Employees key={employee.id} employee={employee} filterDepartments={this.filterDepartments.bind(this)}/>
        ))}
        </table>

    )
  }
}

export default Table
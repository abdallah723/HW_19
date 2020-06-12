import React from "react";

class Employees extends React.Component {
  render() {
    return(
        <tbody>
          <tr>
            <th scope="row">{this.props.employee.id}</th>
            <th scope="row">{this.props.employee.firstName}</th>
            <th>{this.props.employee.lastName}</th>
            <th >
              <button className="btn btn-sm btn-info"
              onClick={() => this.props.filterDepartments(this.props.employee.department)}>
                {this.props.employee.department}</button>
            </th>
            <th>{this.props.employee.email}</th>
            <th> {this.props.employee.address.city}, {this.props.employee.address.state}</th>
          </tr>
        </tbody>
    );
  };
};

export default Employees;
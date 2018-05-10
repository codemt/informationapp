import React, { Component } from 'react'
import { Table , tr , td , thead , tbody , th , Button } from 'react-materialize';
import { Users } from '../api/Users';
import { runInThisContext } from 'vm';

export default class UserList extends Component {

  deleteThisTask() {
    Users.remove(this.props.user._id);
  }
  render() {
    
    return (
    
      
      <tbody>
        <tr>
          <td>{this.props.user.firstname}</td>
          <td>{this.props.user.lastname}</td>
          <td>{this.props.user.email}</td>
          <td> <Button floating large className='red' waves='light' icon='undo' onClick={this.deleteThisTask.bind(this)} /></td>
        </tr>
      </tbody>
    
      
     
    )
  }
}

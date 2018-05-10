import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import { Input , Row , option , Icon , Button ,Table , tbody,tr,td,thead } from 'react-materialize';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserList from '../ui/userlist';

// import database...
import { Users } from '../api/Users';

 class ClientList extends Component {
    constructor(props){

        super(props);
        //setting up the state.
        this.state = {

              users : []

        };

  }
  renderUsers(){
     console.log(this.props.users);
    return this.props.users.map((user) => (
            
        <UserList key={user._id} user={user} />

    ));

}
 
  render() {
    return (
     
      <div>
       <NavBar />
       <Table>
       <thead>
        <tr>
          <th data-field="id">FirstName</th>
          <th data-field="name">LastName</th>
          <th data-field="price">Email ID</th>
          <th data-field="price">Delete Client</th>
        </tr>
      </thead>
    
          {this.renderUsers()} 
    

      </Table>
           
                
        
          
      </div>
    )
  }
}
ClientList.propTypes = {

        users : PropTypes.array.isRequired,


}
export default createContainer(()=>{

        Meteor.subscribe('users'); 
        return {

             users : Users.find({},{ sort:{name:1}}).fetch()  
        };
    
},ClientList)
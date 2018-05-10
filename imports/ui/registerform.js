import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import { Input , Row , option , Icon , Button } from 'react-materialize';
import { Users } from '../api/Users';

 class RegisterForm extends Component {
    submitform(event){

        let firstname = event.target.firstname.value;
        console.log(firstname);


            event.preventDefault();
            Users.insert({

                firstname:event.target.firstname.value,
                lastname:event.target.lastname.value,
                email:event.target.email.value,
                // firstname:"Mithilesh",
                // lastname:"tarkar",
                // email:"common@gmail.com"

            })
            console.log('registered sucessfully');
            this.props.history.push('/');
    }
  render() {
    return (
     
      <div>
       <NavBar />
        <div className="container">
            <Row>
                <form onSubmit={this.submitform.bind(this)}>
                    <Input  s={12}   type="text" name="firstname" placeholder="First Name" />
                    <Input s={12}  type="text" name="lastname" placeholder="Last Name" />
                    <Input type="text" name="email" placeholder="Email" s={12} />
                    <Button waves='light'   type="submit" name="action" className="red">Submit </Button>
                 </form>
            </Row>
          </div>
      </div>
    )
  }
}
export default withRouter(RegisterForm);
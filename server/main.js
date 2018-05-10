import { Meteor } from 'meteor/meteor';
import { Users } from '../imports/api/Users';
Meteor.startup(() => {
  // code to run on server at startup
  // code to run on server at startup
  Meteor.publish('users',function(){

    return Users.find({});


})

});

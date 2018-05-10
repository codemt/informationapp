import { Mongo } from 'meteor/mongo';
import  SimpleSchema  from 'simpl-schema';
export const Users = new Mongo.Collection('users');
const Schemas = {};

Schemas.Users = new SimpleSchema({

    firstname:{ type: String},
    lastname:{type:String},
    email:{type:String}
    
});

Users.attachSchema(Schemas.Users);

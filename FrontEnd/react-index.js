/* 
What do I need this to do?
This should set up the state and conditionally render the login/signup/main app pages.


Approach Thoughts
Given that I need state to remember if a user is logged in, will set that up here. 
Will use functional components, as they are the New Way To Do Things.
To keep this clean, will render app here and import components from the components folder. 

Components:
react-index.js  has state, conditionally calls login/setup/main
  login
    box
      input field for username
      input field for password
      button to send to BE
  signup
      input for username
      input for password
      input for email
      button to send
  main
    display for user
    display for Search
      button to send
    display for user's Stuff
      stuff
        name, borrow request from, lent to
      new Thing
        input field
        button
    display for Search Stuff
    button for add a thing
    button for delete a thing
    button for lend a thing
    button for don't lend a thing
    button for request a thing. 
    

      
    


State: variables
isLoggedIn
username
user details
  user Stuff

State: functions
login
signup
search
add a thing
delete a thing
approve lending to person X
reject lending to person X
request a thing. 


Notes
functional component with destructuring...
const FunctionalComponent = ({ name }) => {
 return <h1>Hello, {name}</h1>;
};

functional component without destructuring...
const FunctionalComponent = (props) => {
 return <h1>Hello, {props.name}</h1>;
};

No render method in functional components. 

State is set up with
const [count, setCount] = React.useState(0);

Replacing componentDidMount, We use the useEffect hook with the second argument of []. 
The second argument of the useState hook is normally an array of a state(s) that changes, 
and useEffect will be only called on these selected changes. But when it’s an empty array 
like this example, it will be called once on mounting. This is a perfect replacement for 
a componentDidMount.

*/



//setup stuff
//import everything, set up default variables, etc etc etc.
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { SingleEntryPlugin } from 'webpack';
import { Signup } from './components/signup';
import { UI } from './components/ui';
import './react-style.css';
import '/components/*.js';

//testing for initial "is it working" test. Ignore this once we have the real app "working".
const Testing = () => {
  return <div>If you can see this, react is working. Yay!</div>;
};


//This is the app. 
//Set up state. 
//Set up functions.
//Set up conditional display.  
function App(){
  //state Stuff
  const [username = "", setUsername] = React.useState(0);
  const [password = "", setPassword] = React.useState(0);
  const [isLoggedIn = false, setIsLoggedIn] = React.useState(0);
  const [noUsername = false, setNoUsername] = React.useState(0);

  //More to be added

  //functions stuff

  //conditional display
  if(isLoggedIn = false){
    return Login;
  }
  if(noUsername = true){
    return Signup;
  }
  if(isLoggedIn = true){
    return UI;
  }

 };
 





//Render
ReactDOM.render(<App/>, document.getElementById('root'));

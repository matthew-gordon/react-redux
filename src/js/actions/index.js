import { Redirect } from 'react-router';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

export function signinUser(values) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/auth/login`, values)
      .then(response => {
        //If request is good...
        //- Update state to indicate user is authenticated
        //- Save the JWT token
        //- redirect to the route '/dashboard'
        this.props.history.push('/');
      })
      .catch(() => {
        //If request is bad...
        //- Show an error to the user
      });


  }
}

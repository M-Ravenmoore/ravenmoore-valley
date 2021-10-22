import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AdminPannel = () => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();


  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently } = useAuth0();

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log(token)
      const response = await fetch(
        `${serverUrl}/api/v2/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const responseData = await response.json();
        console.log(responseData)
        responseData.forEach(user =>{
          
        })
      setName(responseData[0].name);
      setName(responseData[0].name);
      setName(responseData[0].name);

    } catch (error) {
      setName(error.message);
    }
  };

return (
  <>
  <button
    type="button"
    className="btn btn-primary"
    onClick={callSecureApi}
  >
    Get all data
  </button>
  <div> Hello {name}, your user name is {username} and email is currently set to {email} </div>
  </>
  );
};

export default AdminPannel;
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AdminPannel = () => {
  const [message, setMessage] = useState('');
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently } = useAuth0();

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log(token)
      const response = await fetch(
        `${serverUrl}/api/v1/newsletter`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const responseData = await response.json();
        console.log(responseData)
      setMessage(responseData);
    } catch (error) {
      setMessage(error.message);
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
  <div>this is users{message}</div>
  </>
  );
};

export default AdminPannel;
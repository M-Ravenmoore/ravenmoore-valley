import React,{useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const AdminPannel = () => {
  const [users, setUsers] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  const callSecureApi = async () => {
      const serverUrl = process.env.REACT_APP_SERVER_URL;
      const token =await getAccessTokenSilently();
      const getUsers = await axios({
        url: `${serverUrl}/api/users`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      console.log(getUsers.data)
      setUsers(getUsers.data);
    }
 
    useEffect(() =>{
     callSecureApi();
    },[]);

return (
  <>

    <h3>User Dump</h3>
  {/* this will want to be a nicely scssed pannel with roll elevation and removal options. */}
  { 
    Object.keys(users).map((user,idx) =>(
      <div key= {idx} className="users">
        <h2> '{users[user].name} '</h2>
        <p>' {users[user].email} '</p>
        <p className="timestamp">'timestamp:{users[user].username}'</p>
        <p className="author">'useredBy:{users[user].address}'</p>
      </div>
    ))
    }
  </>
  );
};

export default AdminPannel;
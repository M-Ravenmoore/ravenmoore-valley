import React from "react";
import { useAuth0, withAuthenticationRequired  } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }
console.log("userobj",user)
  return (
    isAuthenticated && (
      <>
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>

      <div className="row">
      <pre className="col-12 text-light bg-dark p-4">
        {JSON.stringify(user, null, 2)}
      </pre>
      </div>
      </>
    )
  );
};



export default Profile;
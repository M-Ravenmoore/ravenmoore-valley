import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }
console.log("userobj",user)
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

// email: "m.ravenmoore@gmail.com"
email_verified: true
family_name: "Ravenmoore"
given_name: "Matt"
locale: "en-GB"
name: "Matt Ravenmoore"
nickname: "m.ravenmoore"
picture: "https://lh3.googleusercontent.com/a-/AOh14Ggr5rWgIk1TZrhyTg50oD2QC-vNOhpoKKtiZJQ6Tw=s96-c"
sub: "google-oauth2|107487160604298897444"
updated_at: "2021-10-11T22:50:28.041Z"

export default Profile;
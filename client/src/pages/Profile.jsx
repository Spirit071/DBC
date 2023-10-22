import { AdminPortal } from "@frontegg/react";
import { ProfileCard } from "../components";
import { nameAndTitle } from "../middleware";
import "../styles/Profile.css";

const Profile = ({ user }) => {

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {/* Render the user profile */}
      {user ? (
        <p className="text-5xl text-white cursor-pointer rising-text" onClick={() => AdminPortal.show()}>
          {nameAndTitle(user)}
        </p>
      ) : (
        <p>No User</p>
      )}
      <ProfileCard user={user} />
    </div>
  );
};

export default Profile;

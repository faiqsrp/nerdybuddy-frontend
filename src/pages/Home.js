import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";

const Home = () => {
  const { userData, loading } = useContext(AppContext);

  if (loading) return <Spinner />;

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {userData ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Home;

import axios from "axios";
import React from "react";

const UserDetails = ({ user }) => {
  console.log(user);
  return (
    <div className="max-w-screen-xl mx-auto flex item-center justify-center bg-gray-500">
      <h1 className="text-xl font-semibold">{user.name}</h1>
      <p className="text-base">{user.username}</p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await res.data;
  return {
    props: { user: data },
  };
}

export default UserDetails;

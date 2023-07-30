import axios from "axios";
import React from "react";

import User from "@/components/list-user/user";

const ListUser = ({ data }) => {
  console.log("data dari server side props", data);
  return (
    <div className="max-w-screen-xl mx-auto flex item-center justify-center bg-gray-500">
      <ul className="flex flex-col gap-4">
        <User data={data} />
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const data = await res.data;
  return { props: { data } };
};

export default ListUser;

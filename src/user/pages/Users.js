import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Garosan",
      image: "https://pbs.twimg.com/profile_images/1273104407593390082/wZFRGIr4_400x400.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;

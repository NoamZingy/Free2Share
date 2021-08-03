import React, { useEffect, useState } from "react";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

import UsersList from "../components/UsersList";

const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loeadedUsers, setLoeadedUsers] = useState();
  useEffect(() => {
    const fecthUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/users"
        );

        setLoeadedUsers(responseData.users);
      } catch (err) {}
    };
    fecthUsers();
  }, [sendRequest]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loeadedUsers && <UsersList items={loeadedUsers} />};
    </>
  );
};

export default Users;

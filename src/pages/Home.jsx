// import React, { useEffect, useRef, useState } from "react";
import TribeTiles from "../components/TribeTiles";
import newRequest from "../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["tribe"],
    queryFn: () =>
      newRequest.get("tribe").then((res) => {
        return res.data;
      }),
  });

  const userDataInLocalStorage = localStorage.getItem("currentUser");
  const userData = userDataInLocalStorage
    ? JSON.parse(userDataInLocalStorage)
    : {};
  const userBetTribeId = userData?.BetTribeLog?.betTribeId;

  return (
    <div className="p-4 mt-8">
      <div className="text-center">
        <h1 className="font-bold text-3xl text-green-800 mb-6">
          Choose Your Tribe
        </h1>
      </div>
      {userBetTribeId && (
        <Link
          to={`/seeteammembers/${userBetTribeId}`}
          className="block text-center transform transition-transform hover:scale-105"
        >
          <h1 className="bg-green-800 text-lg text-white py-2 px-4 w-44 rounded-md inline-block mt-4 hover:bg-green-600 transform transition-transform hover:scale-105">
            See Your Team Members
          </h1>
        </Link>
      )}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6">
        {isLoading ? (
          <div className="text-gray-600">Loading...</div>
        ) : error ? (
          <div className="text-red-600">Something went wrong</div>
        ) : (
          data?.data?.map((tribe) => (
            <TribeTiles
              key={tribe.id}
              item={tribe}
              className="transform transition-transform hover:scale-105"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;

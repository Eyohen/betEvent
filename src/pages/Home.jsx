import React, { useEffect, useRef, useState } from "react";
import TribeTiles from "../components/TribeTiles";
import newRequest from "../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["tribe"],
    queryFn: () =>
      newRequest.get("tribe").then((res) => {
        return res.data;
      }),
  });

  console.log(data);
  return (
    <div>
      <div className="font-bold text-2xl text-[#2C5C4B] mt-4">
        Choose Your Tribe{" "}
      </div>
      <Link to={"/seeteammembers"}>
        {" "}
        <h1 className="bg-[#2C5C4B] text-lg text-white p-1 w-[210px] rounded-md">
          See Your Team Members
        </h1>
      </Link>

      <div className="grid gap-[10px] sm:grid-cols lg:grid-cols-5 md:grid-cols-3">
        {isLoading
          ? "Loading..."
          : error
            ? "Something went wrong"
            : data?.data?.map((tribe) => (
              <TribeTiles key={tribe.id} item={tribe} />
            ))}
      </div>
    </div>
  );
};

export default Home;

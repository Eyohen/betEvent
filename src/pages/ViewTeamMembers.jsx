import { useNavigate, useParams } from "react-router-dom";
import newRequest from "../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import greenbg from "../assets/greenbg.png";
import yellowbg from "../assets/yellowbg.png"
const ViewTeamMembers = () => {
  let { betTribeId } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["tribesingle"],
    queryFn: () => {
      if (!betTribeId) {
        const savedUserData_ = localStorage.getItem("currentUser");
        const savedUserData = savedUserData_ ? JSON.parse(savedUserData_) : {};
        betTribeId = savedUserData.BetTribelog?.betTribe.betTribeId;

        if (!betTribeId) {
          navigate("/login");
        }
      }

      return newRequest
        .get(`tribe/member/logs?betTribeId=${betTribeId}`)
        .then((res) => {
          return res.data;
        });
    },
  });

  return (
    <div
      className="container mx-auto p-4 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-xl rounded-xl h-[100%]"
      style={{
        backgroundImage: `url(${yellowbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-center text-[#2C5C4B] font-bold text-2xl mt-5">
        My Team Members
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {Array.isArray(data?.data) &&
          data.data.map((item) => (
            <div
              className="bg-white rounded-lg shadow-lg p-4 bg-[#F2F2F2]"
              key={crypto.getRandomValues(new Uint32Array(1))[0]}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.profileImage}
                  className="w-12 h-12 rounded-full"
                  alt={`Profile of ${item.Participant.firstName}`}
                />
                <div>
                  <h2 className="text-lg font-semibold">
                    {item.Participant.firstName} {item.Participant.lastName}
                  </h2>
                  <p className="text-gray-600">Instagram: {item.socials}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ViewTeamMembers;

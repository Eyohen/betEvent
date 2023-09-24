import { useNavigate, useParams } from "react-router-dom";
import newRequest from '../utils/newRequest';
import { useQuery } from "@tanstack/react-query";

const ViewTeamMembers = () => {
  let { betTribeId } = useParams();
  const navigate = useNavigate()

  const { data } = useQuery({
    queryKey: ['tribesingle'],
    queryFn: () => {
      if (!betTribeId) {
        const savedUserData_ = localStorage.getItem('currentUser')
        const savedUserData = savedUserData_ ? JSON.parse(savedUserData_) : {}
        betTribeId = savedUserData.BetTribelog?.betTribe.betTribeId
        
        console.log(savedUserData)
        if (!betTribeId) { navigate('/login')}
      }

      return newRequest.get(`tribe/member/logs?betTribeId=1800d2d7-11d5-4a42-91e9-fe2eaa9a49c6`).then(res => {
        return res.data;
      })
    }
  })

  console.log('data',data)
  return (
    <div>
      <h1 className='text-center text-[#2C5C4B] font-bold text-lg mt-5'>My Team Members</h1>
      {
        Array.isArray(data?.data) && data.data?.map((item) => (
          <div className='border p-2 mt-4 rounded-lg shadow-lg' key={crypto.getRandomValues(new Uint32Array(1))[0]}>
            <div className='flex flex-row gap-2'>
              <img src={item.profileImage} className='w-12 h-12' />
              <div>
                <h1 className='text-lg'>name: {item.Participant.firstName + ' ' + item.Participant.lastName}</h1>
                <h1 className='text-lg'>instagram: {item.socials}</h1>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ViewTeamMembers
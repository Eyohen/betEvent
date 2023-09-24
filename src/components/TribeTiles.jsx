import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import newRequest from '../utils/newRequest';

const TribeTiles = ({ item }) => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['repodata'],
    queryFn: () => newRequest.get(`tribe/${item.id}`).then(res => {
      return res.data;
    })
  })
  return (
    <>
      <Link to={`/tribepage/${item.id}`}>
        <div className='shadow-lg rounded-lg p-3 '>
          <div className='items-center flex'>
            <img className='w-12 h-12' src={item?.image} alt='' />
            <div className='ml-2'>
              <h1>{item.name}</h1>
              <h1>Members:{item.memberCount}</h1>
            </div>
          </div>
        </div>
      </Link>

    </>

  )
}

export default TribeTiles
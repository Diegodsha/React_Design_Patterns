import axios from 'axios'
import { useEffect, useState } from 'react'

const useUser = (userId) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
      (async()=>{
          const response = await axios.get(`/users/${userId}`)
          setUser(response.data)
      })()
    }, [userId])

    return [user,setUser]
}

export default useUser

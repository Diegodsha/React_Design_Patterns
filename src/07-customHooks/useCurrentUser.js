import axios from 'axios'
import { useEffect, useState } from 'react'

const useCurrentUser = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
      (async()=>{
          const response = await axios.get('/current-user')
          setUser(response.data)
      })()
    }, [])

    return [user,setUser]
}

export default useCurrentUser

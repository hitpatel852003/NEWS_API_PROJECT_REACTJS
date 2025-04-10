import React from 'react'
import UserContext from './UseContext'

function UseContextProvider({children}) {
    const [user,setUser] = React.useState();
  return (
    <div>
      <UserContext.Provider value={{user,setUser}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UseContextProvider

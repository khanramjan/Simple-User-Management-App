import React, { useReducer } from 'react'
import { initialState, reducer } from './hooks/UseReducer'
import UsersContext from './hooks/UsersContext'
import Users from './components/Users'
import NewUser from './components/NewUser'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Navbar from './components/Navbar'
import Blogs from './components/pages/Blogs'
import Blog from './components/pages/Blog'
import Names from './components/pages/Names'
import UseSearchParam from './components/pages/UseSearchParam'
import Protected from './components/pages/Protected'


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
      <div>
        <h1 className="text-2xl mt-4 text-center font-bold font-serif mb-3">
          User Management App
        </h1>
        <Navbar/>
       <div className='flex justify-center'>
       {isLoggedIn ? <button className='border bg-orange-300 py-1 px-2 rounded-md mt-1' onClick={()=>setIsLoggedIn(false)}>Log Out</button> : <button className='border bg-orange-300 py-1 px-2 rounded-md mt-1' onClick={() => setIsLoggedIn(true)}>Log In</button>}
       </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs /> } />
          <Route path="/blogs/:title" element={<Blog /> } />
          <Route path="/names" element={<Names /> } />
          <Route path="/queryparams" element={<UseSearchParam />} />
          <Route path="/users" element={
            <Protected isLoggedIn={isLoggedIn}>
              <NewUser />
              <Users />
              <div className="flex justify-center">
               
              </div>
            </Protected>
          } />
        </Routes>
       
      </div>
      </BrowserRouter>
    </UsersContext.Provider>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Alert from './Alert'
import About from './About'
import UserDetails from './UserDetails'
import GithubState from '../context/github/githubState'
import AlertState from '../context/alert/alertState'
import NotFound from './NotFound'
import Home from './Home'


const App = () => {    
    return (
        <GithubState>
            <AlertState>
                    <Navbar />
                    <Alert />
                    <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/about" element={<About/>} />
                            <Route path="/user/:login" element={<UserDetails/>}/>
                            <Route element={<NotFound/>}/>
                    </Routes>
            </AlertState>
        </GithubState>                
    )
  
}

export default App
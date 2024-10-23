import './App.scss'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Profile from './Components/Homepage/Profile/Profile';
import Careers from './Components/Homepage/Careers/Careers';
import Jobdata from './Components/Apply/Jobdata';


function App() {
  
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Careers' element={<Careers/>}/>
        </Routes>

        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Jobdata/:id' element={<Jobdata/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

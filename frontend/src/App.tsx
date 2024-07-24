import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './pages/Register'
import Login from './pages/Login'
import AddHotel from './pages/AddHotel'
import { useAppContext } from './contexts/AppContext'
import MyHotels from './pages/MyHotels'
import EditHotel from './pages/EditHotel'
import Search from './pages/Search'
import Detail from './pages/Detail'

function App() {

  const { isLoggedIn } = useAppContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><p>HomePage</p></Layout>} />
        <Route path="/search" element={<Layout><Search /></Layout>} />
        <Route path="/detail/:hotelId" element={<Layout><Detail></Detail></Layout>} />
        <Route path="/register" element={<Layout><Register></Register></Layout>} />
        <Route path="/sign-in" element={<Layout><Login></Login></Layout>} />


        {isLoggedIn && (<>
          <Route path='/add-hotel' element={<Layout><AddHotel></AddHotel></Layout>} />
          <Route path='/my-hotels' element={<Layout><MyHotels></MyHotels></Layout>} />
          <Route path='/edit-hotel/:hotelId' element={<Layout><EditHotel></EditHotel></Layout>} />
        </>)}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

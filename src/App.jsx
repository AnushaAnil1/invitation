import { useCallback, useState } from 'react'
import SplashScreen from './pages/SplashScreen'
import InvitationPage from './pages/InvitationPage'

import './App.css'
import SchedulePage from './pages/SchedulePage'
import CoverPage from './pages/CoverPage'

function App() {
  const [page, setPage] = useState('splash')

  const changePage = useCallback((key) => {
    setPage(key)
  }, [])

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      {page === 'splash' && <SplashScreen changePage={changePage} />}
      {page === 'invitation' && <InvitationPage changePage={changePage} />}
      {page === 'schedule' && <SchedulePage changePage={changePage} />}
      {page === 'cover' && <CoverPage changePage={changePage} />}
    </div>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { WppIcon } from './components/Commons/WppIcon'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { SecContact } from './components/Main/Contact.js/SecContact'
import { AppProvider } from './context/AppContext'
import { MainIndex } from './routes/MainIndex'
import { MainInfoPropertie } from './routes/MainInfoPropertie'
import { MainProperties } from './routes/MainProperties'

function App () {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<MainIndex />} />
            <Route path='/properties' element={<MainProperties />} />
            <Route path='/properties/:id' element={<MainInfoPropertie />} />
          </Routes>
          <SecContact />
          <WppIcon />
        </main>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  )
}

export default App

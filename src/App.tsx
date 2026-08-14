import './App.css'
import Navbar from './components/Navbar'
import { I18nProvider } from './lib/i18n'

function App() {

  return (
    <I18nProvider>
      <div className='relative min-h-screen overflow-x-clip bg-base text-text'>
        <Navbar />
      </div>
    </I18nProvider>
  )
}

export default App


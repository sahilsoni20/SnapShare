import { Toaster } from 'react-hot-toast'
import { ImageDownloader } from './components/ImageDownloader/ImageDownloader'
import { ImageUploader } from './components/ImageUploader/ImageUploader'
import './index.css'

function App() {

  return (
    <div className='main-container'>
      <Toaster position={'top-center'} reverseOrder={false}/>
      <ImageUploader/>
      <ImageDownloader/>
    </div>
  )
}

export default App

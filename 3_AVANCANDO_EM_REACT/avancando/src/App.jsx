import './App.css'
import night from './assets/night.jpg'

function App() {


  return (
    <>
      <div className='App'>
        <h1>Avançando em React</h1>
        <img src="/img.jpg" alt="rua de alguma cidade" />
        <img src={night} alt="" />
      </div>
    </>
  )
}

export default App

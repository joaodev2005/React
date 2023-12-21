import './App.css'
import night from './assets/night.jpg'
import Data from './components/Data'
import ListRender from './components/ListRender'

function App() {


  return (
    <>
      <div className='App' style={{paddingBottom: '500px'}}>
        <h1>Avançando em React</h1>
        <img src="/img.jpg" alt="rua de alguma cidade" />
        <img src={night} alt="" />
        <Data/>
        <ListRender/>
      </div>
    </>
  )
}

export default App

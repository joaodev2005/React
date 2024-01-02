import './App.css'
import MyComponent from './components/MyComponent'

function App() {


  return (
    <>
      <div className='App'>
        <h1>CSS no React</h1>
        < MyComponent />
        <p>Conteúdo vazou para o App</p>
        <p style={{color: 'pink', fontSize:'3rem', padding: '4rem', borderTop: '1px solid black'}}>Este elemento tem estilos inline</p>
      </div>
    </>
  )
}

export default App

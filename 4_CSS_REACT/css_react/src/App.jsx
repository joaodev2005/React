import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const n = 21
  const redTitle = true

  return (
    <>
      <div className='App'>
        <h1>CSS no React</h1>
        < MyComponent />
        <p>Conteúdo vazou para o App</p>
        <p style={{ color: 'pink', fontSize: '3rem', padding: '4rem', borderTop: '1px solid black' }}>Este elemento tem estilos inline</p>
        <h2 style={n > 10 ? {color: 'purple'} : {color: 'yellow'}}>
          CSS dinâmico
        </h2>
        <h2 style={n > 20 ? {color: 'cyan'} : {color: 'yellow'}}>
          CSS dinâmico
        </h2>
        <h2 className={redTitle ? 'red-title' : 'title'}>Este titulo vai ter uma classe</h2>
      </div>
    </>
  )
}

export default App

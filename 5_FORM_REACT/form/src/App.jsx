import './App.css'
import MyForm from './components/MyForm'

function App() {


  return (
    <>
      <div className='App'>
        <h1>Form em React</h1>
        <MyForm userName='Juca' userEmail='juca@horadecodar.com.br'/>
      </div>
    </>
  )
}

export default App
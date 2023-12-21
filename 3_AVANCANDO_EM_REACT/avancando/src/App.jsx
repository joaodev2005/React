import './App.css'
import night from './assets/night.jpg'
import Data from './components/Data'
import ListRender from './components/ListRender'
import CondicionalRender from './components/CondicionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import { Children } from 'react'

const cars = [
  { id: 1, brand: 'Ferrari', color: 'Amarelo', km: 0 },
  { id: 2, brand: 'BMW', color: 'Verde', km: 330 },
  { id: 3, brand: 'Mitsubishi', color: 'Preto', km: 320 },
]

function App() {


  return (
    <>
      <div className='App' style={{ paddingBottom: '500px' }}>
        <h1>Avançando em React</h1>
        <img src="/img.jpg" alt="rua de alguma cidade" />
        <img src={night} alt="" />
        <Data />
        <ListRender />
        <CondicionalRender />
        <ShowUserName name='Jailson' />
        <CarDetails brand='VW' km={999} color='Dourado' />
        <CarDetails brand='Fiat' km={3239} color='Branco' />
        <CarDetails brand='BMW' km={4098} color='Azul' />
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} />
        ))}
        <Fragments />
        <Container >
          <p>Alguma coisa</p>
        </Container>
        <Container>
          <div>
            <h2>Meu componente</h2>
            <p>teste</p>
          </div>
        </Container>
      </div>
    </>
  )
}

export default App

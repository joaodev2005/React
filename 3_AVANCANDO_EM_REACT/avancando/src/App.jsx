import './App.css'
import night from './assets/night.jpg'
import Data from './components/Data'
import ListRender from './components/ListRender'
import CondicionalRender from './components/CondicionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

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
      </div>
    </>
  )
}

export default App

import './App.css';
import { CarDetails } from './components/CarDetails';

function App() {
  const cars = [
    { id: 1, brand: "Mercedes", km: 4321, color: "Branco" },
    { id: 2, brand: "Chevrolet", km: 5334, color: "Vermelho" },
    { id: 3, brand: "Renault", km: 0, color: "Prata" },
    { id: 4, brand: "Peugeout", km: 12112, color: "Amarelo" },
    { id: 5, brand: "Kia", km: 0, color: "Verde" },
  ]

  return (
    <div className="App">
      <h1 className="tittle_main">Carros a venda</h1>
      <div className="car_container">
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

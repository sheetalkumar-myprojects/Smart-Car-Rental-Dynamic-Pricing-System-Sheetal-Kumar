import hondasedan from '../assets/hondasedan.png';
import kiasedan from '../assets/kiasedan.png';
import toyotasedan from '../assets/toyotasedan.png';
import { useNavigate } from 'react-router-dom';



export default function ViewVehiclesPage() {
    const navigate = useNavigate();
    const vehicles = [
        {
            id: 1,
            name: 'Honda Sedan',
            image: hondasedan,
            price: 100,
        },{
            id: 2,
            name: 'Toyota Sedan',
            image: toyotasedan,
            price: 90,
        },{
            id: 3,
            name: 'Kia Sedan',
            image: kiasedan,
            price: 80,
        },
    ];


    return (
        <div>
            <h1>AVAILABLE SEDANS</h1>
            <div style={{ display: "flex", gap: "20px" }}>
        {vehicles.map((car) => (
          <div key={car.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={car.image} alt={car.name} style={{ width: "200px", height: "auto" }} />
            <h3>{car.name}</h3>
            <p>${car.price}/day</p>
           
            <button onClick={() => navigate(`/reserve/${car.id}`)}>Reserve</button>
          </div>
        ))}
            </div>
        </div>
    )
}
import { useParams } from "react-router-dom";
import hondasedan from '../assets/hondasedan.png';
import kiasedan from '../assets/kiasedan.png';
import toyotasedan from '../assets/toyotasedan.png';
import { useNavigate } from 'react-router-dom';


export default function ReservePage() {
    const { id } = useParams();
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

    const selectedCar = vehicles.find((v) => v.id === Number(id));


    return (
        <div className="reservation-container">
           <h2>Reservation</h2>
           {selectedCar ? (
        <div>
          <h3>{selectedCar.name}</h3>
          <img src={selectedCar.image} alt={selectedCar.name} style={{width: '200px', height: 'auto'}} />
          <p>Price: ${selectedCar.price}/day</p>
        </div>
      ) : (
        <p>Car not found</p>
      )}
<form>
  <input type="text" placeholder="Full Name" required />
  <input type="email" placeholder="Email" required />
  <input type="tel" placeholder="Phone Number" required />
  <input type="text" placeholder="Driver's License" required />
  <h4>Pickup & Drop-off</h4>
        <input type="text" placeholder="Pickup Location" required />
        <input type="date" placeholder="Pickup Date" required />
        <input type="date" placeholder="Drop-off Date" required />

        <h4>Payment</h4>
        <input type="text" placeholder="Card Number" required />
        <input type="text" placeholder="Expiry (MM/YY)" required />
        <input type="text" placeholder="CVV" required />
        
        <button onClick={() => navigate(`/insurance/`)}>Confirm Reservation</button> 
</form>
        </div>
    )
}
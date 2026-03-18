

import { useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();
  return (
    <div className="search-box">
      <input type="text" placeholder="Pick-up Location" />
      <label>Pickup date <input type="date" /></label>
      <label>Drop off date <input type="date" /></label>
      <button onClick={() => navigate('/vehicles')}>View Vehicles</button>
    </div>
  );
}
  
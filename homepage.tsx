
import homepagecars from '../assets/homepagecars.png';
import Search from './search';

export default function Homepage() {
    


    return (
        <div 
        
            className="home-container"
            style={{
                backgroundImage: `url(${homepagecars})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100vw",
            }}
        >
            <input type="text" placeholder="Login" />
            <input type="text" placeholder="Signup" />
            <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '50px' }}>
                Car Rental System
            </h1>
            <Search />
            
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Navbar from './Navbar';

const attractions = {
  'Cultural and Historical Attractions': [
    { id: 1, name: 'Sigiriya Rock Fortress', image: 'sigiriya.jpg', description: 'A UNESCO World Heritage Site, this ancient rock fortress is famed for its stunning frescoes and breathtaking views.' },
    { id: 2, name: 'Dambulla Cave Temple', image: 'dambulla.jpg', description: 'A network of caves adorned with Buddhist murals and statues, reflecting Sri Lanka\'s deep spiritual history.' },
    { id: 3, name: 'Polonnaruwa', image: 'polonnaruwa.jpg', description: 'An ancient city with impressive ruins, including the Gal Vihara, showcasing beautiful Buddha statues carved into granite.' },
    { id: 4, name: 'Anuradhapura', image: 'anuradhapura.jpg', description: 'The ancient capital known for its sacred Bodhi Tree, temples, and stupas like Ruwanwelisaya.' },
    { id: 5, name: 'Temple of the Tooth Relic, Kandy', image: 'kandy_temple.jpg', description: 'A revered Buddhist temple that houses the sacred tooth relic of Lord Buddha.' },
  ],
  'Natural Wonders': [
    { id: 6, name: 'Adam’s Peak (Sri Pada)', image: 'adams_peak.jpg', description: 'A sacred mountain with a unique footprint, offering a spiritual climb and a stunning sunrise view.' },
    { id: 7, name: 'Horton Plains National Park', image: 'horton_plains.jpg', description: 'Famous for its "World\'s End" viewpoint, this plateau is ideal for trekking amidst misty landscapes.' },
    { id: 8, name: 'Yala National Park', image: 'yala.jpg', description: 'Known for its leopard population, Yala offers a chance to see wildlife like elephants, sloth bears, and exotic birds.' },
    { id: 9, name: 'Udawalawe National Park', image: 'udawalawe.jpg', description: 'A haven for elephant lovers, providing close encounters with these gentle giants.' },
    { id: 10, name: 'Sinharaja Forest Reserve', image: 'sinharaja.jpg', description: 'A UNESCO-listed rainforest teeming with endemic flora and fauna.' },
  ],
  'Hill Country': [
    { id: 11, name: 'Nuwara Eliya', image: 'nuwara_eliya.jpg', description: 'Known as "Little England," this area is famed for its cool climate, tea plantations, and colonial architecture.' },
    { id: 12, name: 'Ella', image: 'ella.jpg', description: 'A picturesque town known for attractions like Nine Arches Bridge, Little Adam’s Peak, and stunning train journeys.' },
    { id: 13, name: 'Knuckles Mountain Range', image: 'knuckles.jpg', description: 'A paradise for hikers and nature enthusiasts, offering scenic trails and biodiversity.' },
  ],
  'Beaches and Coastal Beauty': [
    { id: 14, name: 'Mirissa', image: 'mirissa.jpg', description: 'A popular spot for whale watching, stunning beaches, and laid-back vibes.' },
    { id: 15, name: 'Unawatuna', image: 'unawatuna.jpg', description: 'Renowned for its palm-lined beaches, coral reefs, and relaxing atmosphere.' },
    { id: 16, name: 'Hikkaduwa', image: 'hikkaduwa.jpg', description: 'A vibrant beach town ideal for snorkeling, surfing, and nightlife.' },
    { id: 17, name: 'Arugam Bay', image: 'arugam_bay.jpg', description: 'A world-class surfing destination with a relaxed atmosphere.' },
    { id: 18, name: 'Trincomalee', image: 'trincomalee.jpg', description: 'Famous for its white sandy beaches like Nilaveli and Pigeon Island for snorkeling and diving.' },
  ],
  'Unique Experiences': [
    { id: 19, name: 'Galle Fort', image: 'galle_fort.jpg', description: 'A colonial-era fort with cobblestone streets, boutique shops, and stunning ocean views.' },
    { id: 20, name: 'Jaffna', image: 'jaffna.jpg', description: 'Experience the northern Tamil culture, visit Nallur Temple, and relax on the untouched beaches.' },
    { id: 21, name: 'Pinnawala Elephant Orphanage', image: 'pinnawala.jpg', description: 'A sanctuary where you can observe and interact with rescued elephants.' },
    { id: 22, name: 'Colombo', image: 'colombo.jpg', description: 'The bustling capital offering a mix of modern skyscrapers, cultural landmarks, and vibrant street markets.' },
    { id: 23, name: 'Bentota', image: 'bentota.jpg', description: 'Perfect for water sports and relaxing at luxurious resorts along the beach.' },
    { id: 24, name: 'Kalpitiya', image: 'kalpitiya.jpg', description: 'A hidden gem for dolphin watching, kite surfing, and unspoiled beaches.' },
  ],
};

function HomePage() {
  return (
    <div className="homePage">
      <h1>Explore the Beauty of Sri Lanka</h1>
      {Object.keys(attractions).map(category => (
        <div key={category} className="category" id={category.toLowerCase().replace(/\s+/g, '-')}>
          <h2>{category}</h2>
          <div className="places">
            {attractions[category].map(place => (
              <div key={place.id} className="place-card">
                <img src={`${process.env.PUBLIC_URL}/images/${place.image}`} alt={place.name} />
                <h3>{place.name}</h3>
                <p>{place.description}</p>
                <Link to={`/place/${place.id}`} className="btn">Read More</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;

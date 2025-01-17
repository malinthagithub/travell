import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailsPage.css';

const tourismPlaces = [
  { id: 1, name: 'Sigiriya Rock Fortress', image: 'sigiriya.jpg', description: 'Sigiriya is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province.' },
  { id: 2, name: 'Dambulla Cave Temple', image: 'dambulla.jpg', description: 'Dambulla Cave Temple is a network of caves adorned with Buddhist murals and statues, reflecting Sri Lanka\'s deep spiritual history.' },
  { id: 3, name: 'Polonnaruwa', image: 'polonnaruwa.jpg', description: 'Polonnaruwa is an ancient city with impressive ruins, including the Gal Vihara, showcasing beautiful Buddha statues carved into granite.' },
  { id: 4, name: 'Anuradhapura', image: 'anuradhapura.jpg', description: 'Anuradhapura is the ancient capital known for its sacred Bodhi Tree, temples, and stupas like Ruwanwelisaya.' },
  { id: 5, name: 'Temple of the Tooth Relic, Kandy', image: 'kandy_temple.jpg', description: 'Kandy is a revered Buddhist temple that houses the sacred tooth relic of Lord Buddha.' },
  { id: 6, name: 'Adam’s Peak (Sri Pada)', image: 'adams_peak.jpg', description: 'Adam’s Peak is a sacred mountain with a unique footprint, offering a spiritual climb and a stunning sunrise view.' },
  { id: 7, name: 'Horton Plains National Park', image: 'horton_plains.jpg', description: 'Horton Plains is famous for its "World\'s End" viewpoint, a plateau ideal for trekking amidst misty landscapes.' },
  { id: 8, name: 'Yala National Park', image: 'yala.jpg', description: 'Yala is known for its leopard population and offers opportunities to see elephants, sloth bears, and exotic birds.' },
  { id: 9, name: 'Nuwara Eliya', image: 'nuwara_eliya.jpg', description: 'Nuwara Eliya is known as "Little England" for its cool climate, tea plantations, and colonial-era architecture.' },
  { id: 10, name: 'Ella', image: 'ella.jpg', description: 'Ella is a picturesque town famous for Nine Arches Bridge, Little Adam’s Peak, and stunning train journeys.' },
  // Add other places from your attractions list
];

function DetailsPage() {
  const { id } = useParams();
  const place = tourismPlaces.find((place) => place.id === parseInt(id));

  if (!place) {
    return <h2>Place not found!</h2>;
  }

  return (
    <div className="detailsPage">
      <h1>{place.name}</h1>
      <img src={`${process.env.PUBLIC_URL}/images/${place.image}`} alt={place.name} className="details-image" />
      <p>{place.description}</p>
    </div>
  );
}

export default DetailsPage;

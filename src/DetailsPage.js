import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailsPage.css';

const tourismPlaces = [
  {
    id: 1,
    name: 'Sigiriya Rock Fortress',
    images: ['BW4YPnXzX3u1.jpg', 'BW4YPnXzX3u1.jpg', 'BW4YPnXzX3u1.jpg'],
    description: 'Sigiriya Rock Fortress, also known as the "Lion Rock," is a UNESCO World Heritage Site and one of Sri Lanka’s most iconic landmarks. Rising dramatically 200 meters above the surrounding plains, this ancient rock fortress is a masterpiece of history, culture, and architecture Built in the 5th century AD by King Kashyapa, Sigiriya served as a royal palace and fortress, showcasing advanced urban planning and artistic brilliance. Visitors are greeted by lush water gardens and pathways leading to the towering rock. Halfway up, the famous Lion’s Gate with massive stone-carved lion paws marks the entrance to the upper palace. The climb to the summit rewards you with breathtaking views of the countryside and ancient ruins.Sigiriya’s frescoes, depicting celestial maidens in vibrant colors, are a must-see. These paintings highlight the artistic achievements of ancient Sri Lanka and remain preserved despite centuries of weathering. The Mirror Wall, once polished to reflect visitors, still bears inscriptions left by ancient travelers.For travelers seeking history, adventure, and awe-inspiring views, Sigiriya is a must-visit destination. Whether exploring its rich heritage or marveling at its panoramic vistas, Sigiriya offers a journey back in time that will leave you enchanted.',
  },
  {
    id: 2,
    name: 'Dambulla Cave Temple',
    image: 'dambulla.jpg',
    description: 'Dambulla Cave Temple is a network of caves adorned with Buddhist murals and statues, reflecting Sri Lanka\'s deep spiritual history.',
  },
  {
    id: 3,
    name: 'Polonnaruwa',
    image: 'polonnaruwa.jpg',
    description: 'Polonnaruwa is an ancient city with impressive ruins, including the Gal Vihara, showcasing beautiful Buddha statues carved into granite.',
  },
  // Add the remaining places
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
      {place.images ? (
        place.images.map((image, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/images/${image}`}
            alt={`${place.name} ${index + 1}`}
            className="details-image"
          />
        ))
      ) : (
        <p>No images available for this place.</p>
      )}
      <p>{place.description}</p>
    </div>
  );
}

export default DetailsPage;

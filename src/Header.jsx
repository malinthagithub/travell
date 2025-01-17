import './Header.css'; // Add custom CSS for styling
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import React from 'react';

function Header() {
 

  // Generate random image placeholders
 

  const topPosts = [
    {
      id: 1,
      imageUrl: `/images/beautiful-diamond-beach-penida-island-bali-indonesia.jpg`, // Random placeholder image
      category: 'Adventure',
      title: 'Adventure Travel',
    },
    {
      id: 2,
      imageUrl: `/images/woman-taking-photo-morning-mist-phu-lang-ka-phayao-thailand.jpg`, // Random placeholder image
      category: 'Relaxation',
      title: 'Adventure Travel',
    },
    {
      id: 3,
      imageUrl: `/images/Untitled design (1).png`, // Random placeholder image
      category: 'Cultural',
      title: 'Adventure Travel',
    },
    {
      id: 4,
      imageUrl: `/images/tropical-nature-background-wedding-paradise.jpg`, // Random placeholder image
      category: 'Nature',
      title: 'Adventure Travel',
    },
  ];

  return (
    <Container fluid className="p-0">
      <Carousel className="header-carousel" interval={1000} controls={true} indicators={true}>
        {topPosts.map((post, index) => (
          <Carousel.Item key={index}>
            <Link to={`/article/${post.id}`}>
              <img
                className="d-block w-100 carousel-image"
                src={post.imageUrl}
                alt={`Slide ${index + 1}`}
              />
            </Link>
            <Carousel.Caption className="carousel-caption">
              <img src='images/Untitled design.png' alt="Logo" className="logo" />
              <h1>
                <Link to={`/article/${post.id}`} className="text-white text-decoration-none">
                  {post.title}
                </Link>
              </h1>
              <p>Your best Adventure Deals with nature.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Header;

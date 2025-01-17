import React from 'react';
import './Header.css'; // Add custom CSS for styling
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  const topPosts = [
    {
      id: 1,
      imageUrl: '/images/woman-taking-photo-morning-mist-phu-lang-ka-phayao-thailand.jpg',
      category: 'Adventure',
      title: 'Adventure Travel',
    },
    {
      id: 2,
      imageUrl: '/images/thachomphu-railway-bridge-white-bridge-sunrise-lamphun-thailand.jpg',
      category: 'Relaxation',
      title: 'Relaxation Retreat',
    },
    {
      id: 3,
      imageUrl: '/images/beautiful-girl-sitting-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand.jpg',
      category: 'Cultural',
      title: 'Cultural Journey',
    },
    {
      id: 4,
      imageUrl: '/images/happy-caucasian-pretty-long-hair-elegant-tourist-woman-dress-with-red-suitcase-outside-hotel.jpg',
      category: 'Nature',
      title: 'Nature Escape',
    },
  ];

  return (
    <Container fluid className="p-0">
      <Carousel className="header-carousel" interval={3000} controls indicators>
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
              <img src="/images/Untitled design.png" alt="Logo" className="logo" />
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

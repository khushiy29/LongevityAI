import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import exampleImage1 from '../img/1.jpg';
import exampleImage2 from '../img/2.jpg';  
import exampleImage3 from '../img/3.jpg';  

function Home() {
  return (
    <Carousel fade={true} controls={true} indicators={true} interval={3000} pause={false}>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block carousel-image"
            src={exampleImage1}
            alt="AI Healthcare Assistant"
          />
        </div>
        <Carousel.Caption>
          <h3>Personalized Healthcare Monitoring</h3>
          <p>Our AI assistant monitors vital signs in real-time, providing proactive healthcare for seniors.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block carousel-image"
            src={exampleImage2}
            alt="Emergency Response"
          />
        </div>
        <Carousel.Caption>
          <h3>Instant Emergency Assistance</h3>
          <p>In case of emergencies, the AI assistant connects with healthcare providers instantly.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block carousel-image"
            src={exampleImage3}
            alt="Companionship Features"
          />
        </div>
        <Carousel.Caption>
          <h3>Companionship and Mental Health</h3>
          <p>Our system also provides conversational support, reducing loneliness and offering reminders.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;

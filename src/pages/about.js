/** @format */

import React from "react";
import "../assets/css/custom.css";

const about = () => {
  return (
    <div>
      <section id="services" className="services">
        <div className="container section-title" data-aos="fade-up">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>ChessboardBattles</strong>, your ultimate
            destination for all things chess! At ChessboardBattles, we are
            passionate about promoting the ancient game of chess and fostering a
            vibrant community of chess enthusiasts from around the world.
          </p>
        </div>

        <div className="container section-title" data-aos="fade-up">
          <h2>Our Journey</h2>
          <p>
            ChessboardBattles was founded with a
            simple yet powerful vision: to provide a platform where chess
            players of all levels – from beginners to grandmasters – can come
            together to learn, play, and grow. Our journey began with a love for
            the game and a desire to share that passion with others.
          </p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={100}>
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-briefcase" />
                </div>
                <div>
                  <h4 className="title">Educational Content</h4>
                  <p className="description">
                  Dive into our extensive collection of articles, tutorials, and strategy guides covering all aspects of chess – from basic rules and tactics to advanced opening theory and endgame techniques.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={200}>
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-card-checklist" />
                </div>
                <div>
                  <h4 className="title">Online Chess Platform</h4>
                  <p className="description">
                  Play chess online against players from around the world in our state-of-the-art online chess platform. Choose your preferred time control, challenge opponents of varying skill levels, and track your progress as you climb the ranks.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={300}>
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-bar-chart" />
                </div>
                <div>
                  <h4 className="title">Community Forums</h4>
                  <p className="description">
                  Engage with fellow chess enthusiasts in our vibrant community forums. Discuss strategies, share insights, and connect with like-minded individuals who share your passion for the game. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={400}>
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-binoculars" />
                </div>
                <div>
                  <h4 className="title">Chess Event</h4>
                  <p className="description">
                  Stay updated on upcoming chess events, tournaments, and exhibitions happening locally and globally. Participate in our sponsored events and showcase your skills on the grand stage.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={500}>
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-brightness-high" />
                </div>
                <div>
                  <h4 className="title">Chess Shop</h4>
                  <p className="description">
                  Explore our curated selection of chess sets, books, and accessories to enhance your playing experience. From classic Staunton sets to themed boards and novelty items, we have something for every chess aficionado.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={600}>
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-calendar4-week" />
                </div>
                <div>
                  <h4 className="title">Eiusmod Tempor</h4>
                  <p className="description">
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;

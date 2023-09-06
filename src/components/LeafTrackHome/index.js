// Import styles
import "./LeafTrackHome.scss";
import React from "react";

// LeafTrackHome component
export function LeafTrackHome() {
  return (
    <>
      {/* Home container */}
      <div className="home">
        <div className="home-container">
          {/* Header section */}
          <div className="home-container-header">
            <p className="home-container-header__title">
              Unleash your inner eco-warrior and combat deforestation with every
              NFT you own.
            </p>
            <p className="home-container-header__description">
              Experience the living and breathing world of NFTs, as our dynamic
              creations evolve in real-time, powered by data collected from our
              state-of-the-art satellite monitoring system.
            </p>
            {/* Browser button (commented out for now) */}
            {/* <div className="home-container-header__browser">
              <p>BROWSER NOW</p>
            </div> */}
          </div>
        </div>

        {/* Information section */}
        <div className="home-info">
          <p className="home-info__description">
            31% of the Earth’s surface is covered by forests.
          </p>
          <p className="home-info__description">
            Only 18% of the world's forests are on land protected from
            deforestation.
          </p>
          <p className="home-info__description">
            Over 420 million hectares of forest have been lost since 1990.
          </p>
        </div>

        {/* Subscription section */}
        <div className="home-subscribe">
          <p className="home-subscribe__title">
            Join the movement towards a sustainable future by enrolling for a
            subscription to a world that's healthier, cleaner, and greener.
          </p>
          <p className="home-subscribe__description">
            Empower yourself with vital knowledge about your reserve's
            vegetation layer through our cutting-edge monitoring system, acting
            as your very own environmental sentry, providing early warnings and
            enabling you to make informed decisions with confidence.
          </p>
          {/* Learn more button (commented out for now) */}
          {/* <div className="home-subscribe__browser">
            <p>LEAR MORE</p>
          </div> */}
        </div>

        {/* Vector graphic section */}
        <div className="home__vector"></div>

        {/* Technologies section */}
        <div className="home-built-technologies"></div>
      </div>
    </>
  );
}

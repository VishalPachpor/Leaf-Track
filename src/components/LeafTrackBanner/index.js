// Import the styles for LeafTrackBanner component
import "./LeafTrackBanner.scss";
import React from "react";

// LeafTrackBanner component that takes a 'banner' prop
export function LeafTrackBanner({ banner }) {
  return (
    // 'figure' element with the class 'collection__banner'
    <figure className="collection__banner">
      {/* 'img' element to display the banner */}
      {/* 'src' attribute set to the value of the 'banner' prop */}
      {/* 'alt' attribute set to 'banner' */}
      <img src={banner} alt="banner" />
    </figure>
  );
}

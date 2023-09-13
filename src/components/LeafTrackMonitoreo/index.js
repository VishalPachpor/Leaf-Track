// Import styles for LeafTrackMonitoreo component
import "./LeafTrackMonitoreo.scss";
import React from "react";
import banner from "../../asserts/images/forestnft.png";
import protectedAreasList from "../../asserts/json/harcoredData.json";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { LeafTrackBanner } from "../LeafTrackBanner";
import { LeafTrackProtectedAreas } from "../LeafTrackProtectedAreas";
import { LeafTrackProtectedArea } from "../LeafTrackProtectedArea";

// LeafTrackMonitoreo component
export function LeafTrackMonitoreo() {
  // Authentication hook
  const auth = useAuth();

  // State for loading and error handling
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // Redirect to home if user is not connected
  if (auth.user.walletAddress === "CONNECT WALLET") {
    return <Navigate to="/" />;
  }

  // Main component structure
  return (
    <div className="monitoreo">
      {/* Display LeafTrackBanner component with specified banner */}
      <LeafTrackBanner banner={banner}></LeafTrackBanner>

      {/* Title for the Monitoreo section */}
      <p className="monitoreo__title">Dynamic NFTs.</p>

      {/* Description for the Monitoreo section */}
      <p className="monitoreo__description">
        The right to truthful and complete information is something that
        motivates us. Our Skywood dynamic NFTs let you access all of the
        monitoring information for each of our registered ecosystems.
      </p>

      {/* Error message display */}
      {error && (
        <p className="monitoreo__description">
          There was an error, look at the console in inspect
        </p>
      )}

      {/* Loading indicator and display protected areas */}
      {loading && !error && (
        <LeafTrackProtectedAreas>
          {/* Map through protected areas and render LeafTrackProtectedArea component for each */}
          {protectedAreasList.map((protectedArea, index) => (
            <LeafTrackProtectedArea key={index} protectedArea={protectedArea} />
          ))}
        </LeafTrackProtectedAreas>
      )}
    </div>
  );
}

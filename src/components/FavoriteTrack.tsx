import Track from "./embed/Track";
import { redirectToAuthCodeFlow } from "../auth/Redirect";
import { getAccessToken } from "../auth/GetToken";
import { fetchData } from "../API/FetchData";
import { useState, useEffect } from "react";

function FavoriteTrack() {
  const [trackId, setTrackId] = useState("29JrmE89KgRyCxBIzq2Ocw");
  const clientId = import.meta.env.VITE_CLIENT_ID as string;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    const fetchTrackData = async () => {
      if (!code) {
        redirectToAuthCodeFlow(clientId);
      } else {
        try {
          const accessToken = await getAccessToken(clientId, code);
          const track = await fetchData(accessToken);
          // populateUI(track); // Handle UI update here
          setTrackId(track.items[0].id); // Update trackId with fetched data
        } catch (error) {
          console.error("Error fetching track data:", error);
        }
      }
    };

    fetchTrackData();
  }, [code, clientId]);

  return (
    <>
      <h1>Favorite Track</h1>
      <Track id={trackId} />
      {/* <h2>
          Track's name: <span id="displayName"></span>
        </h2>
        <span id="img"></span>
        <ul>
          <li>
            Artist: <span id="artist"></span>
          </li>
          <li>
            Track ID: <span id="id"></span>
          </li>
          <li>
            Spotify URI: <a id="uri" href="#"></a>
          </li>
          <li>
            Link: <a id="url" href="#"></a>
          </li>
          <li>
            Album's Image: <span id="imgUrl"></span>
          </li>
        </ul> */}
    </>
  );
}

export default FavoriteTrack;

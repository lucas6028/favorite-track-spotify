import { generateCodeVerifier } from "./GenerateVerifier";
import { generateCodeChallenge } from "./GenerateChallenge";

export async function redirectToAuthCodeFlow(clientId: string) {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);
  const redirectURI =
    (import.meta.env.VITE_REDIRECT_URI as string) ||
    "http://localhost:5173/callback";

  localStorage.setItem("verifier", verifier);

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("response_type", "code");
  params.append("redirect_uri", redirectURI);
  // params.append("scope", "user-read-private user-read-email");
  params.append("scope", "user-top-read");
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

import { setCookie } from "../utils/cookies";

export async function getAccessToken(clientId: string, code: string) {
  const verifier = localStorage.getItem("verifier");
  const redirectURI =
    (import.meta.env.VITE_REDIRECT_URI as string) ||
    "http://localhost:5173/callback";

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", redirectURI);
  params.append("code_verifier", verifier!);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const { access_token } = await result.json();
  setCookie("accessToken", access_token);
  return access_token;
}

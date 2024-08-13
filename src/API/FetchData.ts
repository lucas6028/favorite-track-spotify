export async function fetchData(token: string) {
  const result = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?limit=1",
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return await result.json();
}

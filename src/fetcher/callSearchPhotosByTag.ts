export const CallSearchPhotosByTag = async (tags: string) => {
  const fetchResponse = await fetch(`/api/flickrSearchPhotosByTag`, {
    method: 'POST',
    body: JSON.stringify({
      tags
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const httpResponse = await fetchResponse.json();
  if (!fetchResponse.ok || !httpResponse) {
    throw new Error(httpResponse.message);
  }
  const flickrData = JSON.parse(httpResponse.text);
  return  flickrData.photos.photo;
}
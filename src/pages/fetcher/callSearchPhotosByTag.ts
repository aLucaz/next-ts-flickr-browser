export const CallSearchPhotosByTag = async (tags: string) => {
  const fetchResponse = await fetch('http://localhost:3000/api/flickrSearchPhotosByTag', {
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
  console.log("OTHER")
  console.log(flickrData);
  return  flickrData.photos.photo;
}
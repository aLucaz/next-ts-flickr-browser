export const callInterestingnessGetList = async () => {
  const fetchResponse = await fetch(`/api/flickrInterestingnessGetList`, {
    method: 'POST',
    body: JSON.stringify({}),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const httpResponse = await fetchResponse.json();
  if (!fetchResponse.ok || !httpResponse) {
    throw new Error(httpResponse.message);
  }
  const flickrData = JSON.parse(httpResponse.text);
  return flickrData.photos.photo;
}
export function getImages(query) {
  const baseUrl = 'https://pixabay.com/api/';
  const keyApi = '42992941-35a2e0d06d00b6838f62e2830';

  const queryParams = new URLSearchParams({
    key: keyApi,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 30,
  });

  return fetch(`${baseUrl}?${queryParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

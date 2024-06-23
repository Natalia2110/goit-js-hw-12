import axios from 'axios';

const imagesApi = axios.create({
  baseURL: 'https://pixabay.com',
  
});

export async function getImages(request, currentPage) {
  const params = {
    q: request,
    key: '44418953-cdbfe82a1d191a3eebe28ee3b',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 100,
  };
  const res = await imagesApi.get('/api/', { params });
  console.log(res.data);
  return res.data;
};

import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesdata = async (sw, ne) =>{
  
	try {
		const {data: {data}} = await axios.get(URL, {
      params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      'X-RapidAPI-Key': 'b0b5262a93msh3ef9d7b1e233368p1b329ajsna69016d4c29d'
    }
  });

		return data;
	} catch (error) {
		console.log(error);
		
	}
}
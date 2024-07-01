import axios from "axios";

export const fetchCountryFlags = async () => {
	const response = await axios.get(`https://xcountries-backend.azurewebsites.net/all`);
	return response.data;
	
};
import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID GhnYWX5Ao7-ANaAjQKZIi1YrZwoNnppxcwnjXKH6d0o"
	}
});
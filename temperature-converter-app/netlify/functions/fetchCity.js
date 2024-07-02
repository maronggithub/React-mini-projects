const fetchUserCity = () => {
  return async (dispatch) => {
    try {
      const apiUrl =
        process.env.NODE_ENV === "production"
          ? "/.netlify/functions/fetchCity"
          : "http://ip-api.com/json/";

      const cityRes = await axios.get(apiUrl);
      dispatch(setCityName(cityRes.data.city));
    } catch (error) {
      console.error("Error fetching user city:", error);
    }
  };
};

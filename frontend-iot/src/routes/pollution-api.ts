import axios from "axios";

export interface IResultFormatted {
  aqi: number;
  pm2_5: number;
  pm10: number;
  place: string;
}

interface IResultData {
  data: {
    list: [
      {
        components: {
          pm2_5: number;
          pm10: number;
        };
        main: {
          aqi: number;
        };
      }
    ];
  };
}

const formatData = (resultFromAPI: IResultData) => {
  const {
    data: {
      list: [
        {
          components: { pm2_5, pm10 },
          main: { aqi },
        },
      ],
    },
  } = resultFromAPI;

  return {
    pm2_5,
    pm10,
    aqi,
  };
};

const saveInDatabase = (body: IResultFormatted) => {
  const API = "http://localhost:3001/value";
  axios.post(API, body).then((response) => console.log(response));
};

export const fetchFromApiAndSave = async (
  lat: string,
  long: string,
  place: string
) => {
  const API = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=2ee13de5953f8500871963e7c58dafe3`;
  const res = await axios
    .get(API)
    .then(function (response) {
      const formatedData = formatData(response);
      saveInDatabase({
        ...formatedData,
        place: place.toLocaleLowerCase(),
      });
      return formatedData;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

export const fetchLatestData = async (limit?: number) => {
  try {
    const res = await axios.get(`http://localhost:3001/latest?limit=${limit}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMyHistory = async () => {
  try {
    const res = await axios.get(`http://localhost:3001/my-history`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const logMyLocation = async () => {
  try {
    const res = await fetchFromApiAndSave(
      "59.334591",
      "18.06324",
      "Stockholm, Sweden"
    );

    await axios.post("http://localhost:3001/latest", {
      values: res,
      place: "Stockholm, Sweden",
    });
  } catch (error) {
    console.log(error);
  }
};

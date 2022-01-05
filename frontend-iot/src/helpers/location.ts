export interface ILocation {
  long: string;
  lat: string;
}

export const getMyCurrentLocation = () => {
  if (navigator) {
    return "Borgarfjordsgatan 12, 164 55 Kista";
  } else return "";
};

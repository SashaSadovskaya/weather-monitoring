export const convertWindDir = (windDir) => {
  switch (windDir) {
    case (0 < windDir < 45):
      return "N";
    case (45 < windDir < 90):
      return "NE";
    case (90 < windDir < 135):
      return "E";
    case (135 < windDir < 180):
      return "SE";
    case (180 < windDir < 225):
      return "S";
    case (225 < windDir < 270):
      return "SW";
    case (270 < windDir < 315):
      return "W";
    default:
      return "NW";
  }
};

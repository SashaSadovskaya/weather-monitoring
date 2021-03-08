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
function setMonth (month) {
  switch (month) {
    case 0:
      return 'января';
    case 1:
      return 'февраля';
    case 2:
      return 'марта';
    case 3:
      return 'апреля';
    case 4:
      return 'мая';
    case 5:
      return 'июня';
    case 6:
      return 'июля';
    case 7:
      return 'августа';
    case 8:
      return 'сентября';
    case 9:
      return 'октября';
    case 10:
      return 'ноября';
    default:
      return 'декабря';
  }
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0': '') + n ;
}

export const convertTime = (time) => {
  let day = time.getDate(),
    month = time.getMonth(),
    year= time.getFullYear(),
    hour = time.getHours(),
    min = time.getMinutes(),
    sec = time.getSeconds();
  return `${day} ${setMonth(month)} ${year} ${hour}:${addZero(min)}:${addZero(sec)}`;
};



import sunSrc from '../img/sun.png';
import weatherSrc from '../img/weather.png';
import weather2Src from '../img/weather_2.png';
import cloudSrc from '../img/cloud.png';
import cloudySrc from '../img/cloudy.png';
import rainSrc from '../img/rain.png';
import stormSrc from '../img/storm.png';
import snowflakeSrc from '../img/snowflake.png';
import fogSrc from '../img/fog.png';
import foggySrc from '../img/foggy.png';
import atmospheric2Src from '../img/atmospheric_2.png';
import atmosphericSrc from '../img/atmospheric.png';
import moonSrc from '../img/moon.png';
import nightSrc from '../img/night.png';

export function chooseIcon (iconCode) {
    switch (iconCode) {
      case '01d':
        return sunSrc;
      case '01n':
        return nightSrc;
      case '02d':
        return weatherSrc;
      case '02n':
        return moonSrc;
      case '03d':
      case '03n':
        return cloudSrc;
      case '04d':
      case '04n':
        return cloudySrc;
      case '09d':
      case '09n':
        return rainSrc;
      case '10d':
        return weather2Src;
      case '10n':
        return atmospheric2Src;
      case '11d':
        return stormSrc;
      case '11n':
        return atmosphericSrc;
      case '13d':
      case '13n':
        return snowflakeSrc;
      case '50d':
        return fogSrc;
      case '50n':
        return foggySrc;
      default:
        return sunSrc;
    }
  };
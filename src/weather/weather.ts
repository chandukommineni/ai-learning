export interface WeatherApi {
  getTemperature(city: string);
}
// export class WeatherApiImp implements WeatherApi {
//   async getTemperature(city: string): number {
//     const response = await fetch('');
//     const temperature:number = await response.json();
//     return temperature;
//   }
// }

export class WeatherService {
  constructor(private readonly weatherApi: WeatherApi) {}
  getWeatherMessage(city: string): string {
    const temp = this.weatherApi.getTemperature(city);
    if (temp > 30) return `${city} is hot today`;
    if (temp < 10) return `${city} is cold today`;
    return `${city} is pleasant today`;
  }
}

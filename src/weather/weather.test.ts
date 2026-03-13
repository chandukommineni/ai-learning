import { beforeEach, describe, expect, it, vi } from 'vitest';
import { WeatherService, WeatherApi } from './weather';

describe('Weather', () => {
  let service: WeatherService;
  const mockWeatherApi: WeatherApi = { getTemperature: vi.fn() };
  beforeEach(() => {
    service = new WeatherService(mockWeatherApi);
  });

  it('should return the message as Ahmedabad is hot today when the city name is Ahmedabad', () => {
    vi.mocked(mockWeatherApi.getTemperature).mockReturnValue(40);
    expect(service.getWeatherMessage('Ahmedabad')).toBe(
      'Ahmedabad is hot today',
    );
  });

  it('should return the message as Himachal is coACld today when the city name is Himachal', () => {
    vi.mocked(mockWeatherApi.getTemperature).mockReturnValue(9);
    expect(service.getWeatherMessage('Himachal')).toBe(
      'Himachal is cold today',
    );
  });

  it('should return the message as Himachal is coACld today when the city name is Himachal', () => {
    vi.mocked(mockWeatherApi.getTemperature).mockReturnValue(15);
    expect(service.getWeatherMessage('Hyderabad')).toBe(
      'Hyderabad is pleasant today',
    );
  });
});

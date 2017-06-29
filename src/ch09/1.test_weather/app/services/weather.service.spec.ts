import { Injector } from "@angular/core";
import { async, getTestBed, TestBed } from "@angular/core/testing";
import { HttpModule, Response, ResponseOptions, XHRBackend } from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { WeatherService, WEATHER_URL_BASE, WEATHER_URL_SUFFIX } from "./weather.service";

describe('WeatherService', () => {
  let mockBackend: MockBackend;
  let service: WeatherService;
  let injector: Injector;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        { provide: WEATHER_URL_BASE, useClass: '' },
        { provide: WEATHER_URL_SUFFIX, useClass: '' },
        WeatherService
      ]
    });

    injector = getTestBed();
  });

  beforeEach(() => {
    mockBackend = injector.get(XHRBackend);
    service = injector.get(WeatherService);
  });

  it('getWeather() should return weather for Seoul',
    async(() => {
      let mockResponseData = {
        cod: '200',
        name: 'Seoul',
        main: {
          temp: 15,
          humidity: 44
        }
      };

      mockBackend.connections.subscribe((connection: MockConnection) => {
        let responseOpts = new ResponseOptions({ body: JSON.stringify(mockResponseData) });
        connection.mockRespond(new Response(responseOpts));
      });

      service.getWeather('Seoul').subscribe(weather => {
        expect(weather.place).toBe('Seoul');
        expect(weather.humidity).toBe(44);
        expect(weather.temperature).toBe(15);
      });
    })
  );
});

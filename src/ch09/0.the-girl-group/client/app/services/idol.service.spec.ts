import { Injector } from "@angular/core";
import { async, getTestBed, TestBed, inject } from "@angular/core/testing";
import { HttpModule, Response, ResponseOptions, XHRBackend } from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { IdolService } from "./idol.service";

describe('WeatherService', () => {
  let mockBackend: MockBackend;
  let service: WeatherService;
  let injector: Injector;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        IdolService
      ]
    });

    injector = getTestBed();
  });

  beforeEach(inject([XHRBackend, IdolService], (_mockBackend, _service) => {
    mockBackend = _mockBackend;
    service = _service;
  }));

  it('getIdolById() should return Idol with ID=1',
    async(() => {
      let mockIdol = { id: 1 };

      mockBackend.connections.subscribe((connection: MockConnection) => {
        let responseOpts = new ResponseOptions({ body: JSON.stringify(mockIdol) });
        connection.mockRespond(new Response(responseOpts));
      });

      service.getIdolById(1).subscribe(i => {
        expect(i.id).toBe(1);
        // expect(weather.humidity).toBe(44);
        // expect(weather.temperature).toBe(15);
      });
    })
  );
});

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientListModule } from './client-list.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListComponent } from './client-list.component';
import { ClientListService } from '../../services/client-list.service';
import { of } from 'rxjs';

describe('[Module]', () => {
  it('should load instance of its own module', () => {
    TestBed.configureTestingModule({
      imports: [
        ClientListModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
    });

    const subject = TestBed.createComponent(ClientListComponent).componentInstance;
    expect(subject).toBeTruthy();
  });
});

describe('[Component]', () => {
  let component: ClientListComponent;
  let clientListService: ClientListService;
  let fixture: ComponentFixture<ClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientListComponent ],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListComponent);
    component = fixture.componentInstance;
    clientListService = TestBed.inject(ClientListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[DOM Render]', () => {
    it('should render Client list filter', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('sgn-Client-list-filter')).toBeTruthy();
    });
  });

  describe('[Functionality]', () => {
  });
});

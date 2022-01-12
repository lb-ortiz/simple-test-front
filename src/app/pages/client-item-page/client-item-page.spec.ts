import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ClientItemPageComponent } from './client-item-page.component';


describe('[Component]', () => {
  let component: ClientItemPageComponent;
  let fixture: ComponentFixture<ClientItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientItemPageComponent ],
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatPaginatorModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[DOM Render]', () => {
    it('should load Legal customer page', () => {
      const ClientItem = fixture.debugElement.query(By.css('sgn-Client-item'));
      expect(ClientItem).toBeTruthy();
    });
  });
});

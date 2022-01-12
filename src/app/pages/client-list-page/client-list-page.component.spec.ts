import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { ClientListPageModule } from './client-list-page.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListPageComponent } from './client-list-page.component';

describe('[Module]', () => {
  it('should load instance of its own module', () => {
    TestBed.configureTestingModule({
      imports: [ClientListPageModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
    });

    const subject = TestBed.createComponent(ClientListPageComponent).componentInstance;
    expect(subject).toBeTruthy();
  });
});

describe('[Component]', () => {
  let component: ClientListPageComponent;
  let fixture: ComponentFixture<ClientListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientListPageComponent ],
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClientItemModule } from './client-item.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientItemComponent } from './client-item.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('[Module]', () => {
  it('should load instance of its own module', () => {
    TestBed.configureTestingModule({
      imports: [ ClientItemModule, HttpClientTestingModule, RouterTestingModule.withRoutes([]),
    ],
    }).compileComponents();

    const subject = TestBed.createComponent(ClientItemComponent).componentInstance;
    expect(subject).toBeDefined();
  });
});

describe('[Component]', () => {
  let component: ClientItemComponent;
  let fixture: ComponentFixture<ClientItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientItemComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[DOM Render]', () => {
    beforeEach(() => {
      fixture.detectChanges();
    })

  });
});

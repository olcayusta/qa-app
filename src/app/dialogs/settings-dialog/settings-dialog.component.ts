import { Component, OnInit, ChangeDetectionStrategy, Inject, NgModule } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { DOCUMENT } from '@angular/common';
import { MaterialModule } from '@modules/material/material.module';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'inek-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsDialogComponent implements OnInit {
  selectedValue!: string;
  selectedCar!: string;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Cihaz temasını kullan' },
    { value: 'pizza-1', viewValue: 'Koyu tema' },
    { value: 'tacos-2', viewValue: 'Açık tema' }
  ];

  cars: Car[] = [
    { value: 'volvo', viewValue: 'Volvo' },
    { value: 'saab', viewValue: 'Saab' },
    { value: 'mercedes', viewValue: 'Mercedes' }
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  onChange($event: MatRadioChange) {
    const themeName = $event.value;
    localStorage.setItem('yt-theme', themeName);
  }
}

@NgModule({
  declarations: [SettingsDialogComponent],
  imports: [MaterialModule]
})
export class SettingsDialogModule {}

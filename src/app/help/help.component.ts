import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@modules/material/material.module';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MaterialModule]
})
export class HelpComponent implements OnInit {
  folders = [
    {
      name: 'Oyunlar',
      updated: 'Bugün'
    },
    {
      name: 'Müzikler',
      updated: 'Evvelsi gün'
    }
  ];
  notes = [
    {
      name: 'Market Alışverişi',
      updated: 'Bugün'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsStateService } from 'src/app/services/signals.state.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  user = this.service.user;
  constructor(private service: SignalsStateService) {}
}

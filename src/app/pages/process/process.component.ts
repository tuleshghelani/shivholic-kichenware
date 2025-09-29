import { Component, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Our Process | Premium Product Development Workflow');
    this.metaService.updateTag({
      name: 'description',
      content:
        'From concept to delivery: die creation, sampling, precision checks, PVC molding, branding, and packaging—delivered on time to your specifications.'
    });
  }
}

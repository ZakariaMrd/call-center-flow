import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'header[cc-header]',
  templateUrl: './cc-header.component.html',
  styleUrls: [ './cc-header.component.scss' ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgOptimizedImage
  ]
})
export class CcHeaderComponent {
}


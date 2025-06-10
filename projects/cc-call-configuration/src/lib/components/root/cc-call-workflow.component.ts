import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WorkflowListComponent } from '../workflow-list/workflow-list.component';
import { RouterOutlet } from '@angular/router';
import { WorkflowListVisibilityService } from '../../../../../../src/app/workflow-list-visibility.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cc-call-workflow',
  templateUrl: './cc-call-workflow.component.html',
  styleUrls: [ './cc-call-workflow.component.scss' ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    WorkflowListComponent,
    RouterOutlet,
    CommonModule
  ]
})
export class CcCallWorkflowComponent {

  public visible$ = this.visibility.visible$;

  constructor(private visibility: WorkflowListVisibilityService) {}

}

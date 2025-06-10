import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { IEntitySummary } from '@foblex/ng-clarc';
import { WorkflowListVisibilityService } from '../../workflow-list-visibility.service';

interface INavigationItem extends IEntitySummary<string> {
  icon: string;
  disabled: boolean;
}

@Component({
  selector: 'nav[cc-navigation]',
  templateUrl: './cc-navigation.component.html',
  styleUrls: [ './cc-navigation.component.scss' ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatIcon,
    RouterLink,
    RouterLinkActive
  ]
})
export class CcNavigationComponent {

  constructor(private visibility: WorkflowListVisibilityService) { }

  public menu: INavigationItem[] = [
    {
      key: 'home',
      name: 'Home',
      icon: 'home',
      disabled: true,
    }, {
      key: 'flow',
      name: 'Flow',
      icon: 'timeline',
      disabled: false,
    }, {
      key: 'form-builder',
      name: 'Form Builder',
      icon: 'build',
      disabled: true,
    }, {
      key: 'master',
      name: 'Master',
      icon: 'list',
      disabled: true,
    }
  ];

  public onFlowClick(isActive: boolean): void {
    if (isActive) {
      this.visibility.toggle();
    }
  }

}

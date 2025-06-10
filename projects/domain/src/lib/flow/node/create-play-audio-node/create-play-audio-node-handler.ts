import { Injectable } from '@angular/core';
import { ENodeType } from '../../e-node-type';
import { INodeModel } from '../../i-node-model';
import { EFormBuilderControlType } from '@shared-components';
import { IHandler } from '@foblex/mediator';
import { generateGuid } from '@foblex/utils';
import { CreatePlayAudioNodeRequest } from './create-play-audio-node-request';

@Injectable({
  providedIn: 'root'
})
export class CreatePlayAudioNodeHandler implements IHandler<CreatePlayAudioNodeRequest, INodeModel> {

  public handle(request: CreatePlayAudioNodeRequest): INodeModel {
    return {
      key: generateGuid(),
      description: 'Play Audio',
      input: generateGuid() + '_input',
      outputs: [ {
        key: generateGuid(),
        name: 'Output Name'
      } ],
      position: request.position,
      type: ENodeType.PlayAudio,
      value: {
        groups: [ {
          name: 'Audio Url',
          controls: [ {
            key: generateGuid(),
            name: 'Audio Url',
            type: EFormBuilderControlType.INPUT,
            value: ''
          } ]
        } ]
      }
    }
  }
}
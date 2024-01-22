import {model, property} from '@loopback/repository';
import {UserModifiableEntity} from '@sourceloop/core';

@model({
  name: 'client_app',
})
export class ClientApp extends UserModifiableEntity<ClientApp> {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    description: 'An identifier for a client',
    type: 'string',
    required: true,
    name: 'key',
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    name: 'api_key',
    description: 'API key generated by the task service',
  })
  apiKey: string;

  @property({
    type: 'string',
    required: true,
    name: 'api_secret',
    description: 'API secret generated by the task service',
  })
  apiSecret: string;
}
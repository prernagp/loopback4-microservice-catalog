﻿// Copyright (c) 2023 Sourcefuse Technologies
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import {AnyObject, model, property} from '@loopback/repository';
import {CoreEntity} from '@sourceloop/core';

@model({
  name: 'orders',
  settings: {strict: true},
})
export class Orders extends CoreEntity<Orders> {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  totalAmount: number;

  @property({
    type: 'string',
    required: true,
  })
  currency: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'string',
    required: true,
  })
  paymentGatewayId: string;

  @property({
    type: 'string',
  })
  paymentmethod: string;

  @property({
    type: 'Object',
  })
  metaData?: AnyObject;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line
  [prop: string]: any; //NOSONAR
}

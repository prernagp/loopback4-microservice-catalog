# in-mail-service

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

A Loopback Microservice primarily used for in-mail implemetation to compose, view in-mails for
any client application

## Installation

```bash
   npm i @sourceloop/in-mail-service
```

## Implementation

### Migration
First of all we need to set up migration for the in-mail database.
The query for Migration is given in the migrations folder. Please
use migrations folder to set up your database.

### Implementation

Create a new Application using Loopback Cli and add the Component for Inmail Service in application.ts

```typescript
import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import { InMailServiceComponent } from '@sourceloop/in-mail-service';
import * as dotenv from 'dotenv';
import * as dotenvExt from 'dotenv-extended';
import path from 'path';

export {ApplicationConfig};

const port = 3000;
export class Client extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    dotenv.config();
    dotenvExt.load({
      schema: '.env.example',
      errorOnMissing: true,
      includeProcessEnv: true,
    });
    options.rest = options.rest || {};
    options.rest.port = +(process.env.PORT || port);
    options.rest.host = process.env.HOST;
    super(options);
    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);
    // add Component for InMailService
    this.component(InMailServiceComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}
```
### Setting Environment Variables

Do not forget to set Environment variables
```environment
NODE_ENV=
LOG_LEVEL=
HOST=
PORT=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
DB_SCHEMA=
JWT_SECRET=
JWT_ISSUER=
```

### Setting up Datasource

Here is a Sample Implementation datasource Implemention using environment Variables
```TypeScript
import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'inmailDb',
  connector: 'postgresql',
  url: '',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  schema: process.env.DB_SCHEMA,
};

@lifeCycleObserver('datasource')
export class VideochatDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'inmail';
  static readonly defaultConfig = config;

  constructor(
    // You need to set datasource configuration name as 'datasources.config.inmail' otherwise you might get Errors
    @inject('datasources.config.inmail', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
```

### API Documentation

#### Common Headers

Authorization: Bearer <token> where <token> is a JWT token signed using JWT issuer and secret.
Content-Type: application/json in the response and in request if the API method is NOT GET

#### Common Request path Parameters

{version}: Defines the API Version

### Common Responses

200: Successful Response. Response body varies w.r.t API<br/>
401: Unauthorized: The JWT token is missing or invalid<br/>
403: Forbidden : Not allowed to execute the concerned API<br />
404: Entity Not Found<br />
400: Bad Request (Error message varies w.r.t API)<br />
201: No content: Empty Response<br />

#### API Details

##### POST /mails

**Description:** Compose or draft a Mail to various Recipients

**Request Body:**
```javascript
{
  "threadId": "string", // Optional, add if you want the messages in a same thread
  "groups": [ // You can define one or more receipients in a group array.
    {
      "party": "string", // email of the recipient
      "type": "to", // type can be to | cc | bcc
    }
  ],
  "attachments": [ // Optional
    {
      "name": "string", // name of the attachment file
      "path": "string", // It can be url like s3 url
      "thumbnail": "string", // Smaller/Compressed version of attachment path. can be s3 url
      "mime": "string", // Content Type of a file (example: image/jpg)
    }
  ],
  "meta": [ // Optional
    {
      "key": "string", // Key Name like Content-Type
      "value": "string", // Value like application/json, text/html etc.
    }
  ],
  "body": "string", // The Message Body
  "subject": "string", // The title  of the Message
  "status": "string", // Draft if you don't want to send message Now
  "extId": "string", // External Id from the Client (Optional)
  "extMetadata": {} // External Metadata from the Client (Optional)
}
```
**Successful Response:**
```javascript
{
  "id": "string", // id of the message
  "version": "string" // API vewrsion
}
```
##### PUT /mails/{messageId}

**Description:** Update Drafted Messages such as modifying attachment, receipients, message body, subject etc.

**Request path Parameters:**

{messageId}: Unique Id of the message which needs to be updated

**Request Body:**
```javascript
{
  "groups": [ // You can define one or more receipients in a group array.
    {
      "party": "string", // email of the recipient
      "type": "to", // type can be to | cc | bcc
    }
  ],
  "attachments": [ // Optional
    {
      "name": "string", // name of the attachment file
      "path": "string", // It can be url like s3 url
      "thumbnail": "string", // Smaller/Compressed version of attachment path. can be s3 url
      "mime": "string", // Content Type of a file (example: image/jpg)
    }
  ],
  "meta": [ // Optional
    {
      "key": "string", // Key Name like Content-Type
      "value": "string", // Value like application/json, text/html etc.
    }
  ],
  "body": "string", // The Message Body (Optional)
  "subject": "string", // The title  of the Message (Optional)
  "status": "string", // Draft if you don't want to send message Now, otherwise, send
  "extId": "string", // External Id from the Client (Optional)
  "extMetadata": "object" // External Metadata from the Client (Optional)
}
```
Success Response:
```javascript
{
  "id": "string", // id of the message
  "version": "string" // API vewrsion
}
```

##### POST /mails/{messageId}/attachments

**Description:** add an attachment to an existing drafted mail

**Request path Parameters:**

{messageId}: The unique id of a mail

**Request Body:**
```javascript
{
  "attachments": [
    {
      "name": "string", // name of the attachment file
      "path": "string", // It can be url like s3 url
      "thumbnail": "string", // Smaller/Compressed version of attachment path. can be s3 url
      "mime": "string" // Content Type of a file (example: image/jpg)
    }
  ]
}
```

**Successful Response:**
```javascript
{
  "items": "array", // array containing attachments,
  "version": "string", // an API version
}
```
##### DELETE /mails/bulk/{storage}/{action}

**Description:** Move inbox/sent items to trash or delete the trashed item

**Request path parameters:**

{storage}: inbox/send/trash (to trash the inbox/sent message or to delete the trashed message)

{action}: trash/delete

**Request body parameters**

```javascript
{
  "messageIds": "Array<string>"
}
```

**Successful Response:**
```javascript
{
  "version" : "string", // the API version
  "item": "Array<object>" // recipient/sender details which was marked for deletion/trash
}
```

##### PATCH /mails/bulk/restore

**Description:** Restore the trashed Mail

**Request body parameters**

```javascript
{
  "messageIds": "Array<string>"
}
```

**Successful Response:**
```javascript
{
  "version": "string", // the API version
  "items": "Array<object>" // receipient/sender details which was restored from trash
}
```

##### PATCH /mails/{messageId}/forward

**Description:** Forward the mail to another receipient

**Request path Parameter:**

{messageId}: Unique message Id

**Request Body:**
```javascript
{
  "groups": [ // you can specify more recipients in groups array for forwarding the mail to multiple recipients
    {
      "party": "string", // email of the recipient
      "type": "to" | "bcc" | "cc", // receipient type
    }
  ]
}
```
**Successful Response:**
```javascript
{
  "version": "string", // the API version
  "id": "string" // the message Id
}
```

##### PATCH /mails/{messageId}/send

**Description:** Send the drafted mail to the receipent

**Request path Parameter:**

{messageId}: Unique Message Id

Successful response
```javascript
{
  "id": "string",
  "version": "string"
}
```

##### PATCH /mails/marking/{markType}

**Description:** mark the mails as read/unread/important/not-important

**Request path Parameter:**

{markType}: read/unread/important/not-important

Successful response
```javascript
{
  success : true,
}
```


##### GET /threads/{threadId}

**Request path Parameters:**

{threadId}: Unique id of thread

**Request query Parameter(Optional):**

filter: Object which contains attribute(s) key value pairs of thread model which is used to filter data.

**Successful Response:**
```javascript
{
  "version": "string", // the API version
  "item": "object" // item containg the thread and the related message, attachment and/or meta-data details
}
```

##### GET /threads

**Request query parameter(s):**

groupFilter: Object which contains attribute(s) key value pairs of group model which is used to filter items.
threadFilter: Object which contains attribute(s) key value pairs of thread model which is used to filter items.

**Successful Response:**
```javascript
{
   "version": "string", // the API version
   "items": "array"  // array containing thread details and the corresponding messages, attachments etc.
}
```

##### GET /mails

**Request query parameter(s):**

groupFilter: Object which contains attribute(s) key value pairs of group model which is used to filter items.
threadFilter: Object which contains attribute(s) key value pairs of thread model which is used to filter items.

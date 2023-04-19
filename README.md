# Backend

Backend is an application developed with the objective of providing an API for data and functionality access.

## Version

1.0.0

## Main file

index.js

## License

MIT

## Scripts

- `dev`: Start the server in development mode, using ts-node-dev and ignoring the files in the node_modules folder.
- `migration:generate`: Generate a new migration based on the data-source.ts file.
- `migration:run`: Run the existing migrations based on the data-source.ts file.

## Development Dependencies

- @types/bcryptjs: ^2.4.2
- @types/cors: ^2.8.13
- @types/express: ^4.17.17
- @types/jsonwebtoken: ^9.0.1
- @types/node: ^18.15.5
- @types/uuid: ^9.0.1
- ts-node-dev: ^2.0.0
- typescript: ^5.0.2

## Dependencies

- bcryptjs: ^2.4.3
- class-transformer: ^0.5.1
- cors: ^2.8.5
- dotenv: ^16.0.3
- express: ^4.18.2
- express-async-errors: ^3.1.1
- jsonwebtoken: ^9.0.0
- pg: ^8.10.0
- reflect-metadata: ^0.1.13
- typeorm: ^0.3.12
- uuid: ^9.0.0
- yup: ^1.0.2

# User Routes

This document describes the endpoints related to the user management.

## Register a new user

Method: `POST`

URL: `/users`

Description: This endpoint is used to register a new user.

Request Body:

- **name** (string)
- **email** (string)
- **password** (string)
- **phone** (string)

Response:

- 201 (Created):
- The created user
- Body:
  - name (string)
  - email (string)
  - password (string)
  - phone (string)
- 400 (Bad Request): Invalid request

## Retrieve all users

Method: `GET`

URL: `/users`

Description: This endpoint is used to retrieve all users.

Security:

- Bearer Auth

Response:

- 200 (Success):
  An array of users

- 401 (Unauthorized): Token invalid

## Retrieve a specific user

Method: `GET`

URL: `/users/{id}`

Description: This endpoint is used to retrieve a specific user.

Security:

- Bearer Auth

Response:

- 200 (Success):
- The retrieved user

- 401 (Unauthorized): Token invalid

## Update a user

Method: `PATCH`

URL: `/users/{id}`

Description: This endpoint is used to update a user.

Request Body:

- **name** (string)
- **email** (string)
- **password** (string)
- **phone** (string)

Security:

- Bearer Auth

Response:

- 200 (Success):
- The updated user
- Body:
  - **name** (string)
  - **email** (string)
  - **password** (string)
  - **phone** (string)
- 400 (Bad Request): Invalid request
- 401 (Unauthorized): Token invalid

## Delete a user

Method: `DELETE`

URL: `/users/{id}`

Description: This endpoint is used to delete a user.

Security:

- Bearer Auth

Response:

- 200 (Success): The deleted user
- 401 (Unauthorized): Token invalid

# Log In a User

Method: `POST`

URL: `/login`

Description: This endpoint is used to log in a user.

Request Body:

- **email** (string)
- **password** (string)

Response:

- 200 (Success):
- The logged in user
- Body:
  - email (string)
  - password (string)
- 400 (Bad Request): Invalid request

# Contact Routes

This document describes the endpoints related to the contact management.

## Create a new contact

Method: `POST`

URL: `/contacts`

Description: This endpoint is used to create a new contact.

Security:

- Bearer Auth

Request Body:

- **name** (string)
- **email** (string)
- **phone** (string)

Response:

- 201 (Created):
- The created contact
- Body:
  - **name** (string)
  - **email** (string)
  - **phone** (string)
- 400 (Bad Request): Invalid request
- 401 (Unauthorized): Token invalid
- 404 (Not Found): User not found

# Retrieve all contacts

Method: `GET`

URL: `/contacts`

Description: This endpoint is used to retrieve all contacts.

Security:

- Bearer Auth

Response:

- 200 (Success):
- An array of contacts
- 401 (Unauthorized): Token invalid

# Update a contact

Method: `PATCH`

URL: `/contacts/{id}`

Description: This endpoint is used to update a contact.

Security:

- Bearer Auth

Request Body:

- **name** (string)
- **email** (string)
- **phone** (string)

Response:

- 200 (Success):
- The updated contact
- Body:

  - name (string)
  - email (string)
  - phone (string)

- 400 (Bad Request): Invalid request
- 401 (Unauthorized): Token invalid

# Delete a contact

Method: `DELETE`

URL: `/contacts/{id}`

Description: This endpoint is used to delete a contact.

Security:

- Bearer Auth

Response:

- 200 (Success): The deleted contact
- 401 (Unauthorized): Token invalid

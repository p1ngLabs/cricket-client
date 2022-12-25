# The Cricket Project

A local library and bookstore in Hanoi

* Framework
  * [Next.js](https://nextjs.org/)
* Database
  * [PostgreSQL](https://postgresql.org/)
* Database access
  * [Knex.js](https://knexjs.org/)
* OAuth2
  * [NextAuth](https://next-auth.js.org/)

## Setting up development environment

* Clone the project then install dependencies using yarn

  ```sh
  cd cricket-project

  yarn
  ```

* Copy the `.env.example` file into `.env` file then update the values accordingly

  ```sh
  cp .env.example .env
  ```

  * Facebook client id and secret can be acquired [here](https://developers.facebook.com/apps/)

  * Google client id and secret can be acquired [here](https://console.developers.google.com/apis/credentials)

  * Discord client id and secret can be acquired [here](https://discord.com/developers/applications)

* If using [Docker](https://www.docker.com/), set up mock database with the following commands from this directory:

  * Install [Knex](https://knexjs.org/) migrations CLI globally, run `npm install -g knex`

  * Start the [PostgreSQL](https://postgresql.org/) database in Docker container, run `docker compose --env-file .env up`

  * Creating migrations and seeds by scripts, run 

  ```sh
  yarn migrate:latest

  yarn seed:run
  ```

* Run `yarn dev` in another terminal tab, app should now be running on port 3000
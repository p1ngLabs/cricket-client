# The Cricket Project

A local library and bookstore in Hanoi

## Techstack

- Framework
  - [Next.js](https://nextjs.org/)
- OAuth2
  - [NextAuth](https://next-auth.js.org/)
- Database
  - [PostgreSQL](https://postgresql.org/)
- Database access
  - [Objection.js](https://vincit.github.io/objection.js/)

## Setting up development environment

- Clone the project then install dependencies using `npm`

  ```sh
  cd cricket-project

  npm install
  ```

- Copy the `.env.example` file into `.env` file then update the values accordingly

  ```sh
  cp .env.example .env
  ```

  - Facebook client id and secret can be acquired [here](https://developers.facebook.com/apps/)

  - Google client id and secret can be acquired [here](https://console.developers.google.com/apis/credentials)

- Install and configure the Cricket server

- Run `npm run dev` in another terminal tab, app should now be running on port 3000

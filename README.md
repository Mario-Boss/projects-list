This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install all dependencies:

```bash
npm run install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This project uses:
- Tailwind and PostCSS in layouts files only to demonstrate skills.
- Eslint to check the code

```bash
npm run lint
```
- Jest and Testing Library to run tests - please use command:

```bash
npm run test # to run tests
# or
npm run test:watch # to run and watch tests for changes
```
- Express.js node framework to demonstrate how to run API server - to use data from Express server please change env constant in `next.config.mjs` file to `express` like that (default value is `local`):
```
const nextConfig = {
    env: {
        dataSource: 'exprees',
        expressAPIsource: "http://localhost:3003/api"
    }
};
```
    and run command:

```bash
npm run server
```
Open [http://localhost:3003](http://localhost:3003) with your browser to see the running server.

There are 5 endpoints:
- GET [http://localhost:3003](http://localhost:3003) - server welcome page
- GET [http://localhost:3003/api/projects](http://localhost:3003/api/projects) - fetching all projects from local file
- GET [http://localhost:3003/api/projects/project_a](http://localhost:3003/api/projects/project_a) - fetching specific project based on project ID, eg: "project_a", "project_b", etc.
- POST `http://localhost:3003/api/projects/new` - endpoint to demonstrate how to add a new project based on the body payload - can be tested with tool like Postman
- POST `http://localhost:3003/api/projects/project_a/edit` - endpoint to demonstrate how to edit an existing project with the body payload - can be tested with tool like Postman

As a next step for this project I wanted to do some nice features but lack of time stopped me:
- implement Prisma functionality with LiteSQL database to keep data
- install and configure Formik and validation schema for the form to make a smooth validation for forms
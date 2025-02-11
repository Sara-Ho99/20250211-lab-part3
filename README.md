# Deployment Codealong Part 3

## Git Repo

20250211-lab-part3

## Setup

- Create a new database
- Edit `.env` with your MySQL credentials and db name
- Install node_modules with `npm install` in the root folder, where the `package.json` file is
- Create tables by running `npm run migrate` from the package.json scripts
- After creating tables run `npm run seed` to populate the tables with data
- Finally, start the project by running either `npm start` or `npm run dev` (to watch files for changes)

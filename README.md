[![Crowdin](https://badges.crowdin.net/labrute/localized.svg)](https://crowdin.com/project/labrute)

<img src="https://github.com/user-attachments/assets/57440ad3-2328-42ea-a840-c24edcdee36f" width="500" />

## Backend

> Made with [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/), [Prisma](https://www.prisma.io/), written in [Typescript](https://www.typescriptlang.org/).

## Frontend

> Made with [MUI's](https://mui.com/) components, [React](https://reactjs.org/) and [create-react-app](https://facebook.github.io/create-react-app/).

## Contributing

- Fork this project

- Make sure your NodeJS and yarn versions are up to date

- If you are using Windows, make sure to use [Git Bash](https://gitforwindows.org/) as your terminal

- Setup your local Postgres databases (labrute + etwin)

- Copy `.env.sample` to `.env` and adapt the variables

- Optional: Create an `eternaltwin.local.toml` config file for Eternaltwin. You don't need it to start LaBrute, but it may be useful for more advanced usage. (An example is provided in the [eternaltwin.local.toml.sample](eternaltwin.local.toml.sample) file)

- Install dependencies: `yarn install` (This should also setup your database from the `schema.prisma` file and the migrations)

- Make sure to initialize your etwin database by running `yarn eternaltwin db sync`

- Start the server, client and etwin local server with `yarn dev`

- Commit and push your changes

- Create a pull request to merge your fork into `main`

### How to sync your database with your new Prisma schema

- Run `yarn db:sync:dev`

### How to seed your database

- Edit `server/src/seed.ts`

- Run `yarn db:seed`

## Deployment

- Set the environment variables

- Install dependencies: `npm ci` (This should also compile and built everything needed)

- Sync your database with `yarn db:sync:prod`

- Start the server with `yarn start`

- Deploy the frontend using a static server of your choice like [Nginx](https://www.nginx.com/)

- Environment variables can be overriden without restarting the server by setting them in the database `Config` table

## Editing `core`

- Make sure to run `yarn core:export` after creating/deleting files in the `core` package, as it will update the indexes accordingly

## Generate the sound spritesheet after editing a sound using audiosprite

- Requirements: install ffmpeg on your Pc, node v18 minimum

- Run the script : `yarn sfx:generate` if you use git bash and  `yarn sfx:wsl:generate` if you use WSL

## Sitemap

- After editing any of the main Google accessible pages, run `yarn sitemap:generate` to update the sitemap


## File Structure

```
├── client
│	├── build    			# Compiled frontend
│	├── public
│	│	├── i18n			# Folder containing all the translations
│	│	└── ...      		# Any other static file
│	└── src
│		├── components 		# Reusable components
│		├── hooks     		# React hooks
│		├── layouts    		# Layouts
│		├── theme     		# Theme variables
│		├── utils       	# Utility functions
│		└── views       	# Views
├── core 					# Shared ressourcs for both front and back end
│   ├── src
├── prisma 					# Prisma types definitions for both front and back end
│   ├── src
└── server 					# Back end
    ├── prisma              # DB
	└── src
	    ├── controllers     # Controllers
 	  	├── utils       	# Utility functions
	    └── ...
```

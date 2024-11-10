[![Crowdin](https://badges.crowdin.net/labrute/localized.svg)](https://crowdin.com/project/labrute)

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

- Optional: Create an `eternaltwin.local.toml` config file for Eternaltwin. You don't need it to start LaBrute, but it may be useful for more advanced usage.

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

*This project should deploy successfully as-is on Heroku*

- Set the environment variables

- Install dependencies: `npm ci` (This should also compile and built everything needed)

- Sync your database with `yarn db:sync:prod`

- Start the server with `yarn start`

## Documentation

Every

- Component
- Method
- Callback

Should have a corresponding documentation.

## Generate the sound spritesheet after editing a sound using audiosprite

- Requirements: install ffmpeg on your Pc, node v18 minimum

- Run the script : `yarn sfx:generate` if you use git bash and  `yarn sfx:wsl:generate` if you use WSL


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

## Backend

> Made with [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/) written in [Typescript](https://www.typescriptlang.org/).

## Frontend

> Made with [MUI's](https://mui.com/) components, [React](https://reactjs.org/) and [create-react-app](https://facebook.github.io/create-react-app/).

## Deployment

- Install dependencies: `npm i`

- Copy `.env.sample` to `.env` and adapt the variables

- Run `npm run db:sync`.

- Start the server with `npm run start`

## Contributing

- Create your own branch from `main`: `git checkout -b dev-xxxx main`

- Make sure your NodeJS and npm versions are up to date

- Install backend dependencies: `npm i`

- Copy `.env.sample` to `.env` and adapt the variables

- Install front dependencies: `cd client && npm i`

- Start the backend `npm run back`

- Start the frontend `npm run front`

- Start the etwin local server `npm run etwin`

- Commit and push your changes

- Create a pull request to merge your branch into `main`

## Documentation

Every

- Component
- Method
- Callback

Should have a corresponding documentation.


## File Structure

```
└── client
	├── build    			# Compiled frontend
	├── public
	│	├── i18n			# Folder containing all the translations
	│	├── ...      		# Any other static file
	├── src
	│	├── assets  		# Precompiled assets
	│	├── components 		# Reusable components
	│	├── hooks     		# React hooks
	│	├── layouts    		# Layouts
	│	├── theme     		# Theme variables
	│	├── utils       	# Utility functions
	│	├── views       	# Views
└── server 					# Back end
	├── db	
	│	├── migrations  	# DB migrations
	│	├── endpoints 		# Controllers
```

## Hooks

### `useAuth`

Use this hook to get the current user and login/logout methods.
```js
const { user, signin, signout, updateDate } = useAuth();
```

#### `user`

| Property | Type | Description |
| --- | --- | --- |
| `id` | `Number` | User id |
| `email` | `String` | User email |
| `login` | `String` | User login |
| `language` | `String` | User language |
| `connexionToken` | `String` | User connexion token |
| `createdAt` | `Date` | Creation date |
| `updatedAt` | `Date` | Last update date |

#### `signin`

```ts
(email: string, password: string) => Promise<User>
```

#### `signout`

```ts
() => void
```

#### `updateData`

```ts
(data: User) => void
```

### `useConfirm`

Use this hook to display a confirm dialog.
```ts
const Confirm = useConfirm();
```

#### `Confirm.open`

```ts
(
	title: string,
	content: string,
	onAccept?: () => void,
	onCancel?: () => void
) => void
```

### `useLanguage`

Use this hook to manipulate the app's language.
```ts
const { language, setLanguage } = useLanguage();
```

#### `language`

```ts
'en' | 'fr'
```

#### `setLanguage`

```ts
(language: 'en' | 'fr') => void
```

### `useStateAsync`

Use this hook to store API data in the state.  
**Objects used as `getterParams` MUST be memoized, the app will constantly render otherwise.**
```ts
<State, Params>(
  initialState: State,
  getter: (params: Params) => Promise<State>,
  getterParams: Params | null | undefined,
): {
  data: State;
  reload: () => void;
  set: React.Dispatch<React.SetStateAction<State>>;
}
```

#### Example

```js
const { data: users } = useStateAsync(
  [],
  Server.User.list,
  auth.user.id
);

// OR (for complex getter params)
const usersGetterProps = useMemo(() => ({
	visibleBy: auth.user.id,
}), [auth.user.id])
const { data: users } = useStateAsync(
  [],
  Server.User.list,
	usersGetterProps
);
```
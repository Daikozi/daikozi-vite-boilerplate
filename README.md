# Daikozi Vite Boilerplate

This is a boilerplate project for React applications built with Vite, a fast build tool that focuses on development experience.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/daikozi/vite-boilerplate.git
   ```
2. Install dependencies:
   ```
   npm install
   ```

## Usage

### Development

To start the development server:

```
npm run dev
```

This will start a development server at http://localhost:5173 with hot module replacement enabled.

### Building

To build the application for production:

```
npm run build
```

This will generate a production build in the dist directory.

### Storybook

To start Storybook:

```
npm run storybook
```

This will start a Storybook server at http://localhost:6006.

### Building Storybook

To build Storybook for production:

```
npm run build-storybook
```

This will generate a production build of Storybook in the storybook-static directory.

### Linting

To lint the JavaScript files:

```
npm run lint:js
```

To automatically fix linting errors:

```
npm run lint:js:fix
```

To run all linters:

```
npm run lint
```

To lint the icones JavaScript files:

```
npm run lint:icones:js:fix
```

### Type Checking

To check the types:

```
npm run check-types
```

### Prettier

To format the code:

```
npm run prettier
```

To check if the code is correctly formatted:

```
npm run check-format
```

To format the code and check if it's correctly formatted:

```
npm run validate
```

### Testing

To run the tests:

```
npm run test
```

### Husky

This project uses Husky to run Git hooks. The prepare script installs Husky when you run npm install.

## Built With

[Vite](https://vitejs.dev/) - Build tool
[React](https://reactjs.org/) - JavaScript library for building user interfaces
[TypeScript](https://www.typescriptlang.org/) - Programming language
[Redux Toolkit](https://redux-toolkit.js.org/) - State management library
[React Query](https://react-query.tanstack.com/) - Data fetching library
[Material-UI](https://material-ui.com/) - React component library
[Emotion](https://emotion.sh/docs/introduction) - CSS-in-JS library
[ESLint](https://eslint.org/) - Code quality tool
[Prettier](https://prettier.io/) - Code formatter
[Husky](https://typicode.github.io/husky/#/) - Git hooks

##Contributing
Contributions are welcome! Please feel free to submit a pull request.

##License
This project is licensed under the MIT License - see the [LICENSE.md](./LISENSE.md) file for details.

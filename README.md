# Typescript-Express Starter Kit

![Express-Typescript Starter Kit](https://repository-images.githubusercontent.com/162537377/9c807700-9828-11ea-8a3b-47411956130e)

A simple Typescript-Express starter kit, designed to provide a solid foundation for building your next great project.

## Description

This starter kit provides a boilerplate for developing Express applications using Typescript. It includes essential dependencies and configuration to kickstart your development process.

## TODO
- [X] Set up the basic app, with all it's features listed below
- [X] Set up Github Workflow
- [X] Add docker workflow to the project
- [ ] Implement Kubernetes
- [ ] Optimize the performance and make the app scalable
- [X] Investigate and fix any known issues or bugs
- [ ] Consider adding additional features or integrations to enhance the functionality

Feel free to contribute to any of the above items or suggest your own improvements. We appreciate any contributions to make this starter kit even better!

## Features

- **Express**: A fast, unopinionated web framework for Node.js.
- **Typescript**: A statically-typed superset of JavaScript that enables robust type checking and improved developer productivity.
- **Cors**: A middleware for handling Cross-Origin Resource Sharing (CORS) in Express applications.
- **Dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
- **Helmet**: A collection of middleware to help secure Express applications by setting various HTTP headers.
- **Winston**: A versatile logging library for Node.js.

## Prerequisites

Make sure you have the following dependencies installed:

- Node.js 
- npm 
- Docker - [OPTIONAL]

## Installation

1. Clone the repository:
`git clone https://github.com/vAndrewKarma/Typescript-Express-StarterKit.git`

2. Change to the project directory:
`cd Typescript-Express-StarterKit`

3. Install the dependencies:
`npm install`

## Configuration

1. Change  `.env.example` file  into `.env` in the project root.

2. Customize the configuration files according to your project requirements.

## Usage

- **Development**: Run the application in development mode with automatic restart using the following command:
`npm run dev`

- **Production**: Run the application a docker container usingg the docker-compose:
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml`

## Scripts

- `test`: Run the Jest test suite.
- `prepare`: Set up Husky pre-commit hooks and initialize the project.
- `dev`: Run the application in development mode with automatic restart (using Nodemon).
- `prettier`: Check if code formatting adheres to Prettier rules.
- `lint`: Run ESLint for linting code.
- `build`: Build the Typescript code using the TypeScript compiler.
- `lint:fix`: Run ESLint and fix linting errors automatically.
- `format`: Format code using Prettier.
- `ready`: Prepare the codebase for production by formatting, linting, and building the code.
- `precommit`: Execute lint-staged for staged files during pre-commit.

## Docker Workflow

To containerize your Typescript-Express-StarterKit application using Docker, follow these steps:

1. Run the Docker container in development mode:
    
`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d `

2. Good job, now your server is listening to the port you have configured in the `docker-composer`.

## Contributing

Contributions are welcome! Please follow the guidelines in [CONTRIBUTING.md](https://github.com/vAndrewKarma/Typescript-Express-StarterKit/blob/main/CONTRIBUTING.md) to contribute to this project.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

For any inquiries or feedback, please contact:
For further help/questions this is my [Discord](https://discord.gg/Sd9tzBPX).


Author: [Karma Andrew](mailto:karma.andrew16@gmail.com)

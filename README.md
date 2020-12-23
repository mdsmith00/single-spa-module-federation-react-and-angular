# single-spa-module-federation-react-angular
This repository demonstrates the use of single-spa as a top-level router and module orchestrator with webpack module federation used as an alternative to SystemJS

## Installing and running the application
1. Within the `shell`, `react-nav-app` and `react-app` directories, run:
    ```shell script
    npm i
    npm run start
    ```
2. Within the `angular-app` directory, run:
    ```shell script
    yarn install
    npm run start
    ```
    Note that you **must** use **yarn** as your package manager for the `angular-app`, it allows you to override the webpack dependencies for the CLI.
    The `angular-app/package.json` contains the following section to override webpack to use version 5 instead of 4:

    ```json
      "resolutions": {
        "webpack": "5.0.0"
      },
    ```
3. Access the application at http://localhost:8080

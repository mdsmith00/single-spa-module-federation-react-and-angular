# angular-app
The Angular Application

## Installing and running the application
1. Run:
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
2. Access the application at http://localhost:8083

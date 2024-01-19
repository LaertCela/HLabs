# HLabs
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm
- Docker (if running with Docker)

### Installing and Running Locally

A step-by-step series of examples that tell you how to get a development environment running.

1. Clone the repository:
    ```bash
    git clone https://github.com/LaertCela/HLabs.git
    ```

2. Navigate to the project directory:
    ```bash
    cd HLabs
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the application:
    ```bash
    npm start
    ```

The server should start on [http://localhost:3000](http://localhost:3000).

### Running with Docker

To build and run the application with Docker, follow these steps:

1. Build the Docker image:
    ```bash
    npm run docker:build
    ```

2. Run the Docker container:
    ```bash
    npm run docker:start
    ```
OR
3. Run the Docker container:
    ```bash
    npm run docker-run
    ```


The application should be accessible on [http://localhost:3000](http://localhost:3000).

## Running the Tests

```bash
npm test
```
Payload to test the endpoint 
        curl --location 'http://localhost:3000/api/numbers' \
    --header 'Content-Type: application/json' \
    --data '{
        "minNumber": 5,
        "maxNumber": 110,
        "feature": ['\''palindrome'\'', '\''prime'\'']
    }'

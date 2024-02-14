# Angular CRUD App with Firebase

This repository contains a simple Angular application that performs CRUD (Create, Read, Update, Delete) operations using Firebase as the backend.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js: [Download Node.js](https://nodejs.org/)
- Angular CLI: Install globally using `npm install -g @angular/cli`

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/berhddich/crudFb.git
    ```

2. Navigate to the project directory:

    ```bash
    cd crudFb
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Firebase Configuration

1. Create a Firebase project: [Firebase Console](https://console.firebase.google.com/)
2. Obtain your Firebase configuration from the Firebase Console.
3. Replace the configuration in `src/environments/environment.ts` with your Firebase configuration.

    ```typescript
    export const environment = {
      production: false,
      firebaseConfig: {
        apiKey: 'YOUR_API_KEY',
        authDomain: 'YOUR_AUTH_DOMAIN',
        projectId: 'YOUR_PROJECT_ID',
        storageBucket: 'YOUR_STORAGE_BUCKET',
        messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
        appId: 'YOUR_APP_ID'
      }
    };
    ```

### Running the Application

Run the following command to start the development server:

```bash
ng serve

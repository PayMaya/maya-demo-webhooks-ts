```
├── README.md
├── package-lock.json
├── package.json            -> Project Configuration
├── src
│   ├── controllers
│   │   └── webhooks.ts     -> Business logic that processes webhooks from Checkout API
│   ├── index.ts            -> Entrypoint
│   └── routes
│       └── webhooks.ts     -> Contains setup of API resources for webhooks endpoint
└── tsconfig.json           -> Typescript Configuration
```

This demo is a simple setup that logs any incoming request to the following webhooks:

    api/v1/webhooks/success
    api/v1/webhooks/failure
    api/v1/webhooks/cancelled

Your backend application must first be deployed on a server and then after, you must register your webhooks using our Create Webhook in our Checkout API (https://developers.maya.ph/reference/createv1webhook-1).

## How to Run the Application
1. Run `npm install` to install all needed packages.
2. Run `npm build` to build the project.
3. Run `npm start` to start the application (App opens in http://localhost:3000 by default)

For format of webhook responses please see https://developers.maya.ph/page/webhook-sample-json-data
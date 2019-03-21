const dev = {
  STRIPE_KEY: "pk_test_pzhRgrSDBYNVy5cObgEcIPkJ006rwmyKCA",


  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-react-app-from-users"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://jxzhwzxqg6.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_noDPVl6MD",
    APP_CLIENT_ID: "4llaqua0eetgf7hc9temgmimu4",
    IDENTITY_POOL_ID: "us-east-2:c7544e71-e171-45f0-9fea-69574b56bb50"
  }
};

const prod = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-react-app-from-users"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://jxzhwzxqg6.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_noDPVl6MD",
    APP_CLIENT_ID: "4llaqua0eetgf7hc9temgmimu4",
    IDENTITY_POOL_ID: "us-east-2:c7544e71-e171-45f0-9fea-69574b56bb50"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  wsEndpoint: 'http://localhost:8080/wsEndpoint',
  websocketTopics:{
    coilNotification: '/topic/coil',
    messageCounter: '/topic/messageCounter',
  },
};

//wsEndpoint: 'http://localhost:8080/wsEndpoint
//  wsEndpoint: 'http://192.168.3.31:8081/wsEndpoint',

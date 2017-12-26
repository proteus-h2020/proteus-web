// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  wsEndpoint: 'http://localhost:8090/wsEndpoint',
  wsReconnectionTime: 10000,
  websocketTopics: {
    coilNotification: '/topic/coil',
    messageCounter: '/topic/messageCounter',
    getters: {
      coil: '/app/get/coil',
      messages: '/app/get/messages',
      batch: {
        dataNotification: '/topic/get/data/coil',
        coilData: '/app/get/data/coil/', // coil id is concatenated here
        realtimeNotification: '/topic/get/realtime/coil',
        realtimeData: '/app/get/realtime/coil/', // coil id is concatenated here
        simpleMomentsNotification: '/topic/get/simplemoments/coil/', // coil id is concatenated here
        simpleMomentsData: '/app/get/simplemoments/coil/', // coil id is concatenated here
        allCoilIDsNotification: '/topic/get/all/coilIDs',
        allCoilIDs: '/app/get/all/coilIDs',
        HSMNotification: '/topic/get/hsm/coil', // coil id is concatenated here
        HSMData: '/app/get/hsm/coil/', // coil id is concatenated here
        streamNotification: '/topic/get/stream/coil/',
        streamData: '/app/get/stream/coil/',
      },
    },
  },
};

// wsEndpoint: 'http://localhost:8080/wsEndpoint
// wsEndpoint: 'http://192.168.3.31:8081/wsEndpoint',

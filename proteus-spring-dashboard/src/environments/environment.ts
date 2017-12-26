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
        historicalData: '/topic/get/historical/coil',
        requestHistorical: '/app/get/historical/coil/', // coil id and var id are concatenated here
        realtimeData: '/topic/get/realtime/coil',
        requestRealtime: '/app/get/realtime/coil/', // coil id is concatenated here
        simpleMomentsData: '/topic/get/simplemoments/coil',
        requestSimpleMoments: '/app/get/simplemoments/coil/', // coil id is concatenated here
        allCoilIDs: '/topic/get/all/coilIDs',
        requestAllCoilIDs: '/app/get/all/coilIDs',
        HSMData: '/topic/get/hsm/coil',
        requestHSM: '/app/get/hsm/coil/', // coil id is concatenated here
        streamData: '/topic/get/stream/coil',
        requestStream: '/app/get/stream/coil/', // coil id is concatenated here
      },
    },
  },
};

// wsEndpoint: 'http://localhost:8080/wsEndpoint
// wsEndpoint: 'http://192.168.3.31:8081/wsEndpoint',

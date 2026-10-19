import { readFileSync } from 'node:fs';
export function liveConfig(path = '.runtime/live-config.json') {
  const env = JSON.parse(readFileSync(path,'utf8'));
  const key = env.AUTH_HEADER_KEY || 'Authorization';
  const value = env.AUTH_HEADER_VALUE || (env.TOKEN ? `Bearer ${env.TOKEN}` : '');
  const headers = value ? [{key:'auth_keys',value:key},{key,value}] : [];
  // 3.3.7 CppWebSocket builds the v1.notify/auth subprotocol from these headers.
  // Passing Sec-WebSocket-Protocol here nests it inside the auth payload.
  const wsHeaders = [...headers];
  return {headers, wsHeaders, config:{address:env.ADDRESS,port:env.PORT,notificationServerAddress:env.NOTIFICATION_SERVER,
    logLevel:process.env.CLOUDAPI2_LOG_LEVEL||'error',logToConsole:false,showVersionInfo:false,logFilePath:'.runtime/node-sdk.log',logMaxFiles:3}};
}

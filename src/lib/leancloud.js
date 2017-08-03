import AV from 'leancloud-storage'
var APP_ID = '';
var APP_KEY = '';
AV.init({
  appId:APP_ID,
  appKey:APP_KEY
});
export default AV
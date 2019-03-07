// const netRoot = 'http://localhost:9999/app/mock/30/';
const netRoot = '/app/mock/30/';
var ajaxRoot = '/gw/';
// var ajaxRoot = 'http://localhost:9999/gw/';

const net = {
  getAdServiceGuidelines: netRoot + 'getAdServiceGuidelines',  //服务须知
  userAccountInfo: netRoot + 'userAccountInfo',  //用户信息
  queryAdHospital: netRoot + 'queryAdHospital',  //医院查询
  saveAdReservation: netRoot + 'saveAdReservation',  //预约
  cancelAdReservation: netRoot + 'cancelAdReservation',  //取消预约
  adReservationEvaluate: netRoot + 'adReservationEvaluate',  //评价
  orderList: netRoot + 'api/order/list',  //陪诊订单列表
  scheduleTime: netRoot + 'api/diagnosis/reservation/scheduleTime',  //预约陪诊时间

  scanConsume: netRoot + 'pay-agency-api/wdepay/scanConsume',  //支付
  userGetTokenByAuthCode: ajaxRoot + 'userGetTokenByAuthCode',//根据code换token
};
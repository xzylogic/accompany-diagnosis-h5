// var net_Root = '/adsa/';
// var netRoot = '/app/mock/30/';
var netRoot = '/gw/';
// var ajaxRoot = '/gw/';

if (document.location.host == 'h5.wdjky.com' || document.location.host == 'www.wdjky.com') netRoot = '/gw/';//生产环境
else {
  if (/wdjky.com/i.test(location.href)) netRoot = '/gw-te/';
  else netRoot = '/gw/';// 10.1.64.195
}

// const net = {
//   getAdServiceGuidelines: netRoot + 'getAdServiceGuidelines',  //服务须知
//   makeOrder: netRoot + 'api/order/makeOrder',  //生成订单
//   userAccountInfo: netRoot + 'userAccountInfo',  //用户信息
//   queryAdHospital: netRoot + 'queryAdHospital',  //医院查询
//   saveAdReservation: netRoot + 'saveAdReservation',  //预约
//   cancelAdReservation: netRoot + 'cancelAdReservation',  //取消预约
//   adReservationEvaluate: netRoot + 'adReservationEvaluate',  //评价
//   adViewEvaluate: netRoot + 'adViewEvaluate',  //查看评价
//   orderList: netRoot + 'api/order/list',  //陪诊订单列表
//   orderDetail: netRoot + 'api/order/detail',  //陪诊订单详情
//   scheduleTime: netRoot + 'api/diagnosis/reservation/scheduleTime',  //预约陪诊时间
//   refundment: netRoot + 'api/order/refundment',  //退款
//
//   scanConsume: netRoot + 'pay-agency-api/wdepay/scanConsume',  //支付
//   userGetTokenByAuthCode: ajaxRoot + 'userGetTokenByAuthCode',//根据code换token
// };


var net = {
  // getAdServiceGuidelines: 'http://10.1.64.194/accompany-diagnosis-service-api/api/reservation/getServiceGuidelines',  //服务须知
  // getAdServiceGuidelines: net_Root + '/reservation/getServiceGuidelines',  //服务须知
  getAdServiceGuidelines: ajaxRoot + 'getAdServiceGuidelines',  //服务须知
  makeOrder: netRoot + 'adMakeOrder',  //生成订单
  userAccountInfo: netRoot + 'userAccountInfo',  //用户信息
  queryAdHospital: netRoot + 'queryAdHospital',  //医院查询
  saveAdReservation: netRoot + 'saveAdReservation',  //预约
  cancelAdReservation: netRoot + 'cancelAdReservation',  //取消预约
  adReservationEvaluate: netRoot + 'adReservationEvaluate',  //评价
  adViewEvaluate: netRoot + 'adViewEvaluate',  //查看评价
  orderList: netRoot + 'adOrderList',  //陪诊订单列表
  orderDetail: netRoot + 'adOrderDetail',  //陪诊订单详情
  scheduleTime: netRoot + 'adScheduleTime',  //预约陪诊时间
  adOrderRefundment: netRoot + 'adOrderRefundment',  //退款
  adRescindRefundment: netRoot + 'adRescindRefundment',  //撤销申请退款
  adGetSdkPayParams: netRoot + 'adGetSdkPayParams',  //获取SDK支付参数
  adQueryPayStatus: netRoot + 'adQueryPayStatus',  //查询支付状态

  //商城支付接口
  createPay: netRoot + 'createPay',  //获取订单id
  payAgent: netRoot + 'payAgent',  //统一支付

  scanConsume: netRoot + 'payAgent',  //支付
  userGetTokenByAuthCode: netRoot + 'userGetTokenByAuthCode',//根据code换token
};
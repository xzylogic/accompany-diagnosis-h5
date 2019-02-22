// 接口基地址
var ajaxRoot = '/healthCloud-open-gateway/gateway/'; // 测试 正式
// var ajaxRoot = '/healthCloud-open-gateway/gateway-dev/'; // 本地开发

// 请求地址
var ajaxUrl= {

	homeForHealthCloud : ajaxRoot + 'homeForHealthCloud', // 首页
	reminderSave : ajaxRoot + 'reminderSave', // 手动设置提醒
	clearReminder : ajaxRoot + 'clearReminder', // 手动设置提醒
	vaccinateSpotList : ajaxRoot + 'vaccinateSpotList', // 接种点查询列表
	iotMeasureStationAreaList : ajaxRoot + 'vaccineAreaList ', // 接种点区域列表
	hospitalInfo : ajaxRoot + 'hospitalInfo', // 接种点详情
	reservationList : ajaxRoot + 'reservationList', // 预约列表
	reservationBillDetail : ajaxRoot + 'reservationBillDetail', // 预约单详情
	internalUserInfo : ajaxRoot + 'internalUserInfo', // 用户详情
	reservationScheduleTime : ajaxRoot + 'reservationScheduleTime', // 预约时间
	reservationH5ScheduleDate : ajaxRoot + 'reservationH5ScheduleDate', // 预约日期
	hospitalGetTipByHospital : ajaxRoot + 'hospitalGetTipByHospital', // 医院提示
	vaccineReservationAssistant : ajaxRoot + 'vaccineReservationAssistant', // 查看预约规则
	reservationSchedule : ajaxRoot + 'reservationSchedule', // 提交预约单
	reservationRescheduling : ajaxRoot + 'reservationRescheduling', // 改期确认
	reservationCancel : ajaxRoot + 'reservationCancel', // 预约取消
	familyChilds : ajaxRoot + 'familyChilds', // 家庭选择儿童
	addABaby : ajaxRoot + 'addABaby', // 添加儿童
	chooseHospital : ajaxRoot + 'chooseHospital', // 选择儿童接种点
	updateBabyInfo : ajaxRoot + 'updateBabyInfo', // 编辑儿童
	delBabyInfo : ajaxRoot + 'delBabyInfo', // 删除接种人

	// 接种史-市疾控
	ifCertificated : ajaxRoot + 'ifCertificated', // 用户是否已实名
	randomHospitalNames : ajaxRoot + 'randomHospitalNames', //  历史接种医院-安全认证
	checkHospital : ajaxRoot + 'checkHospital', //  检查最近一次接种点是否匹配
	babyQueryInfo : ajaxRoot + 'babyQueryInfo', // 获取儿童绑定信息
	queryCheck : ajaxRoot + 'queryCheck', // 接种记录查询校验
	cdcH5Reservation : ajaxRoot + 'cdcH5Reservation', // 居民下次接种记录
	// 管理后台
	// 消息、短信
	cdcH5VaccineList : ajaxRoot + 'cdcH5VaccineList', // 接种列表
	cdcH5VaccineView : ajaxRoot + 'cdcH5VaccineView', // 接种视图列表
	cdcH5reservationDetail : ajaxRoot + 'reservationDetail', // 下次接种详情
	cdcH5vaccinatedDetail : ajaxRoot + 'vaccinatedDetail', // 已接种详情

	vaccinateSpot : ajaxRoot + 'vaccinateSpot', // 我的接种点
	allVaccines : ajaxRoot + 'allVaccines', // 全体疫苗列表
	unVaccination : ajaxRoot + 'unVaccination', // 获取未确认接种的预约信息 (首页)
	reservationConfirm : ajaxRoot + 'reservationConfirm', // 确认接种

	qiNiuToken : ajaxRoot + 'getQiniuToken', // 获取七牛token

	vaccinationBook : ajaxRoot + 'vaccinationBook', // 接种程序 疫苗本-接种本
	vaccineDetail : ajaxRoot + 'vaccineDetail', // 接种程序详情 接种本-疫苗详情


    bindChild : ajaxRoot + 'vaccineBindChild', // 儿童档案信息绑定
    vaccineReservationList : ajaxRoot + 'vaccineReservationList', // 疫苗接种列表
    reservationDetail : ajaxRoot + 'vaccineReservationDetail', // 查询指定预约单信息
    workdays : ajaxRoot + 'vaccineWorkdays', // 查询可预约日期列表
    scheduling : ajaxRoot + 'vaccineScheduling', // 某一日期排班表查询
    changeTheDate : ajaxRoot + 'vaccineChangeTheDate', // 预约改期接

    setUpDoc : ajaxRoot + 'vaccineSetUpDoc', // 儿童建档
    validateCard : ajaxRoot + 'vaccineValidateCard', // 校验身份证是否合法
    queryChildInfoById : ajaxRoot + 'vaccineQueryChildInfoById', // 儿童档案信息查询

    agreementList : ajaxRoot + 'agreementList', // 知情同意书列表
    agreementSign : ajaxRoot + 'agreementSign', // 知情同意书签字
	
    rankNoOne : ajaxRoot + 'rankNoOne', // 指定接种人排到最前面

	// logAction : ajaxRoot + 'logAction' // 行为日志 埋点请求

};

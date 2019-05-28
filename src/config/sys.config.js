export default {
    title: '联通河长制管理系统',
    author: '',
    ver: '1.2',

    menu: [
        {title: '首页', url: '/', icon: 'el-icon-house'},
        {title: '实时信息', url: '/info/infoNew', icon: 'el-icon-timer'},
    ],
    menu2: [
        {title: '组织信息', url: '/organize/organizeInfo', icon: 'el-icon-printer'},
        {title: '视频监控', url: '/monitor/monitorVideo', icon: 'el-icon-monitor'},
        {title: '资料文件', url: '/file/fileData/guidang', icon: 'el-icon-document'},
        {title: '工作台', url: '/work/workTai/index', icon: 'el-icon-setting'},
    ],
    api: {
        login: '/index/user/',

        // coustomer_list: '/customer/admin_api/list_customer',
        // coustomer_info: '/customer/admin_api/get_customer',
        // coustomer_save: '/customer/admin_api/save_customer',
        // coustomer_wechat_info: '/customer/admin_api/get_customer_wechat',
        //
        // order_list: '/shop/admin_api/list_order',
        // order_info: '/shop/admin_api/get_order',
        // order_save: '/shop/admin_api/save_order',
        //
        // deposit_list: '/deposit/admin_api/list_deposit',
        // deposit_info: '/deposit/admin_api/get_deposit',
        // deposit_save: '/deposit/admin_api/save_deposit',
        //
        // point_list: '/point/admin_api/list_point',
        // point_info: '/point/admin_api/get_point',
        // point_save: '/point/admin_api/save_point',
        //
        // action_list: '/point/admin_api/list_action',
        // action_info: '/point/admin_api/get_action',
    }
}
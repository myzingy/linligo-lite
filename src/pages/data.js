/**
 * Created by goto9 on 2018/5/4.
 */
export default {
    //'楼下自提','送货到家','来我家取'
    distribution:[{name:'楼下自提'},{name:'送货到家'},{name:'来我家取'}],
    //'蔬菜','水果','肉蛋','水产'
    types:[{name:'蔬菜'},{name:'水果'},{name:'肉蛋'},{name:'水产'}],
    //activity status
    activityStatus:{
        0:'待采购',
        1:'采购中',
        2:'待派送',

        3:'派送中',
        4:'派送完',

        10:'已取消',
        11:'已拒绝',
        12:'缺货',
    },
    units:[
        '斤',
        '个',
        '根',
    ]
}
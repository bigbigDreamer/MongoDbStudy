/**
 * @time  2019/1/17 0:54
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc  存放每张数据表的Schema
 */
export default {
    Person: {
        //username为字符串类型，是必须的数据
        username: {
            type: String,
            required: true,
        },
        //age为数字类型，可有可无
        age: {
            type: Number
        }
    }
};
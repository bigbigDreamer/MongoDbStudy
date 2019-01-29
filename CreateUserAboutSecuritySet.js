/**
 * @time  2019/1/29 15:04
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc  为数据库启用用户验证
 *   use targetDatabase
 *   db.createUser({
 *       user:'root',
 *       pwd:'CMD123456',
 *       roles:[{
 *           role:'userAdminAnyDatabase',
 *           db: 'targetDatabase'
 *       },
 *       'readWriteAnyDatabase'
 *       ]
 *   })
 */


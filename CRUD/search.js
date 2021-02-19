const models = require("../models")

async function findById (id) {
    const result = await models.User.findById(id)  // 根据id查文档
    console.log(result)
}

// 模型.find(filter, [projection], [options]) 根据条件、投影、配置 进行查询

// filter
// {
//     // 查询所有channel="财经焦点的新闻" 并且title包含中国的新闻
//     // channel: "财经焦点", 
//     // title: /中国/,      
//     // 查询所有channel="财经焦点的新闻" 或者title包含中国的新闻
//     $or:[
//        {
//         channel: "财经焦点"
//        },
//        {
//          title: /中国/,
//        }
//     ],
//     // 查询所有 发布日期 大于等于 昨天此时的新闻
//     // $gt 大于 $gte 大于等于 $lt 小于 $lgt 小于等于 $ne 不等于
//     // $in 其值在某个数组中 $nin 其值不在某个数组中
//     pubDate: {
//         $gte: Date.now() - 3600 * 24 * 1000
//     }
// }

// projection
// "title pubDate" 仅查询_id、title、pubDate
// "-content"     除了content 都要查询

// options
// { skip: 5, limit: 6}  跳过结果中的5条数据,取6条
// { sort: "-pubDate"}  按照发布日期的降序排序


async function find (filter, projection, options) {
    const result = await models.News.find(filter, projection, options)  
    console.log(result);
}

// 获取指定条件的数量
async function count (filter) {
    const result = await models.News.countDocuments(filter)  
    console.log(result);
}

// find()
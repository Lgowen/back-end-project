const models = require("../models")

// 删除单个文档
async function deleteOne (filter) {
    const result = await models.News.deleteOne(filter)
}

// 删除多个文档
async function deleteMany (filter) {
    const result = await models.News.deleteMany(filter)
}
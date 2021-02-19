const models = require("../models")

// 更新单个文档
async function updateOne (filter, doc) {
    const result = await models.News.updateOne(filter, doc)
}

// 更新多个文档
async function updateMany (filter, doc) {
    const result = await models.News.updateMany(filter, doc)
}
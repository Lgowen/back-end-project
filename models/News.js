const mongoose = require("mongoose")
// 新闻结构
const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // 必填
        trim: true    // 写入数据时,会自动去掉首尾空格
    },
    content: {
        type: String,
        trim: true
    },
    pubDate: {
        type: Date,
        required: true, // 必填
        default: Date.now
    },
    channel: {
        type: String,
        required: true, // 必填
    },
    link: {
        type: String,
        required: true, // 必填
    }
})

// 结构定义模型
module.exports = mongoose.model("News", newsSchema)


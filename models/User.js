const mongoose = require("mongoose")
// 用户结构
const userSchema = new mongoose.Schema({
    loginId: {
        type: String,
        required: true, // 必填
        unique: true,  // 属性值唯一
        trim: true,    // 写入数据时,会自动去掉首尾空格
        minlength: 3,  // 约束：字符串最小长度为3
        maxlength: 18
    },
    loginPwd: {
        type: String,
        required: true, // 必填
        trim: true,
        minlength: 3,
        maxlength: 18,
        select: false   // 后续对用户进行查询的时候，不要查询密码
    },
    name: {
        type: String,
        required: true, // 必填
        trim: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        required: true, // 必填
        min: 1,
        max: 100
    },
    role: {
        type: String,
        required: true, // 必填
        trim: true,
        emum: ["管理员", "普通用户", "VIP"]
    }
})


// 结构定义模型
module.exports = mongoose.model("User", userSchema)

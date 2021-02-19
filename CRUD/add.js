const models = require("../models")
const users = require("../users.json")
const news = require("../news.json")

async function addUser() {
    try {
        const result = await models.User.create(users)
        // console.log(result)
    } catch (err) {
        console.log("创建用户失败")
    }
}
// console.log(models.News, models.User);
async function addNews() {
    try {
        const result = await models.News.create(news)
        // console.log(result)
    } catch (err) {
        console.log(err)
    }
}



addUser()
addNews()
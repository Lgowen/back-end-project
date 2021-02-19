const express = require("express")
const router = express.Router()
const services = require("../services")

router.get("/", async (req, res) => {
    const page = +req.query.page || 1
    const limit = +req.query.limit || 10
    const result = await services.newsService.getNews(page, limit, "")
    res.send(result)
    console.log("分页得到新闻数据")
})

module.exports = router
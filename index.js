const express = require("express")
const path = require("path")
const cors = require("cors")
const app = express()


// 该函数返回一个中间件
// 它将指定的目录作为静态资源目录
// 当访问服务器时，该中间件会通过 path 对应该目录中的文件
// 如果能够找到文件，则直接响应文件内容，不再向后移交
// 若无法找到文件，向后移交
const dirname = path.resolve(__dirname, "public")
const staticMiddleWear = express.static(dirname)
app.use(staticMiddleWear)

// 该函数返回一个中间件
// 如果它发现请求头中的 content-type 的值是 application/x-www-form-urlencoded
// 则会把请求体中的内容解析为一个对象，保存到 req.body 中，然后向后移交
// 否则，直接向后移交
const urlencodedMiddleWear = express.urlencoded({ extended: true })
app.use(urlencodedMiddleWear)


// 该函数返回一个中间件
// 如果它发现请求头中的 content-type 的值是 application/json
// 则会把请求体中的内容解析为一个对象，保存到 req.body 中，然后向后移交
// 否则，直接向后移交
const jsonMiddleWear = express.json()
app.use(jsonMiddleWear)

app.use(cors())

// 路由中间件
app.use("/api/user", require("./routes/user"))
app.use("/api/news", require("./routes/news"))



app.listen(9527, () => {
    console.log("server is listening on 9572")
})

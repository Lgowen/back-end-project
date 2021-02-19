const User = require("../models").User

// 注册一个用户
// userObj: 用户对象
// 返回: 新注册的用户对象
exports.reg = async function (userObj) {
   try {
     const result = await User.create(userObj)
     return result
   } catch (err) {
     console.log(err)
   }
}


// 注册一个用户
// loginId: 账号
// loginPwd: 密码
// 登录成功返回用户对象,失败返回null
exports.login  = async function (loginId, loginPwd) {
  try {
    const result = await User.find(loginId, loginPwd)
    if(result.length === 0) return null
    return result[0]
  } catch (err) {
    console.log(err);
  }
}

// 查找用户
// id: 用户的唯一编号
// 返回: 用户对象，用户不存在返回null
exports.getUser = async function (id) {
  try {
    const result = await User.findById(id)
    if(result.length === 0) return null
    return result
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  responseClient (res, httpCode = 500, code = 3, message = '服务端异常', data = {}) {
		let responseData = {
      error: {
        level: code,
        msg: message
      },
      resData: data
    };
		res.status(httpCode).json(responseData);
  }
}
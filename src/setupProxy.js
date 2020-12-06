const proxy = require("http-proxy-middleware")
const morgan = require("morgan")

module.exports = app => {
    app.use(
        "/api",
        proxy({
            target: "http://localhost:4000",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "/api/v1"
            }
        })
    )

    app.use(morgan('combined'))
}
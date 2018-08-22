const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>Hello world</h1>'
})

app.use(async (ctx, next) => {
    console.log('中间件1 do sth')
    await next()
    console.log('中间件1 end')
})

app.use(async (ctx, next) => {
    console.log('中间件2 do sth')
    await next()
    console.log('中间件2 end')
})

app.use(async (ctx, next) => {
    console.log('中间件3 do sth')
    await next()
    console.log('中间件3 end')
})

app.listen(3000, ()=> {
    console.log('listening 3000')
})
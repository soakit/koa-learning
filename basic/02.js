const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>index page</h1>'
})
// /home?id=12&name=ikcamp
router.get('/home', async (ctx, next) => {
    console.log(ctx.request.query) // { id: '12', name: 'ikcamp' }
    console.log(ctx.request.querystring) // id=12&name=ikcamp
    ctx.response.body = '<h1>home page</h1>'
})

router.get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>'
})

app.use(router.routes())

/* // 不使用koa-router
app.use(async (ctx, next) => {
    if (ctx.request.path === '/') {
        ctx.response.body = '<h1>index page</h1>'
    } else {
        await next()
    }
})

app.use(async (ctx, next) => {
    if (ctx.request.path === '/home') {
        ctx.response.body = '<h1>home page</h1>'
    } else {
        await next()
    }
})

app.use(async (ctx, next) => {
    if (ctx.request.path === '/404') {
        ctx.response.body = '<h1>404 Not Found</h1>'
    } else {
        await next()
    }
}) */

app.listen(3000, ()=> {
    console.log('listening 3000')
})
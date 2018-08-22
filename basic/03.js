const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')

// 路由前缀
const router = new Router({
    prefix: '/users'
})
// 多中间件
router.get('/:id', 
    async (ctx, next) => {
        ctx.response.body = '<h1>user page</h1>'
		ctx.user = {
			id: ctx.params.id,
			name: 'zhangsan'
		}
		await next()
    },
    async (ctx) => {
        console.log(ctx.user)
    }
)

app.use(router.routes())

// 路由嵌套(子路由)
var forums = new Router();
var posts = new Router();
posts.get('/', function (ctx, next) {
    ctx.response.body = '<h1>Posts Home page</h1>'
});
posts.get('/:pid', function (ctx, next) {
    ctx.response.body = '<h1>Post page</h1>'
});
forums.use('/forums/:fid/posts', posts.routes(), posts.allowedMethods());
// 可以匹配到的路由为 "/forums/123/posts" 或者 "/forums/123/posts/123"
app.use(forums.routes());

app.listen(3000, () => {
	console.log('listening 3000')
})

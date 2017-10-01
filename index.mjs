import Koa from 'koa'
import Router from 'koa-router'
import morgan from 'koa-morgan'
import serve from 'koa-static'

const app = new Koa()
const router = new Router()

router.get('/api', (ctx, next) => {
  ctx.body = { success: true }
})

app.use(morgan('combined'))
app.use(serve('public'))
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)

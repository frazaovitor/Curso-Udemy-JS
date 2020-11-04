//  middleware pattern ( chain of responsability)

const pass1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const exexPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => exexPasso(indice +1))
    }
    exexPasso(0)
}

const ctx = {}
exec(ctx, pass1, passo2, passo3)
console.log(ctx)
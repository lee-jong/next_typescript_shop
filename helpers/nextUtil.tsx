import Router from 'next/router'

export const $nextRouter = (path : string) => {
    Router.push(path)
}
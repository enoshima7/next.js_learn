import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  // routeChangeStart
  // routeChangeComplete
  // beforeHistoryChange
  // routeChangeError
  // hashChangeStart
  // hashChangeComplete
  Router.events.on('routeChangeStart', (...args) => {
    console.log('1. routeChangeStart=>路由开始变化，参数为', ...args)
  })
  Router.events.on('beforeHistoryChange', (...args) => {
    console.log('2. beforeHistoryChange=>路由变化之前，参数为', ...args)
  })
  Router.events.on('routeChangeComplete', (...args) => {
    console.log('3. routeChangeComplete=>路由变化结束，参数为', ...args)
  })
  Router.events.on('routeChangeError', (...args) => {
    console.log('4. routeChangeError=>路由发生错误，参数为', ...args)
  })
  Router.events.on('hashChangeStart', (...args) => {
    console.log('5. hashChangeStart=>hash路由变换之后，参数为', ...args)
  })
  Router.events.on('hashChangeComplete', (...args) => {
    console.log('6. hashChangeComplete=>hash路由变化之前，参数为', ...args)
  })

  function gotoXJJ() {
    Router.push({
      pathname: '/xjj',
      query: { name: '井孔' },
    })
  }
  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href={{ pathname: 'xjj', query: { name: '范冰冰' } }}>
          <a>选择范冰冰</a>
        </Link>
        <br />
        <Link href='/xjj?name=cjk'>
          <a>选择仓进空</a>
        </Link>
        <Link href='#jspang'>
          <a>选择技术胖</a>
        </Link>
      </div>
      <div>
        <button onClick={gotoXJJ}>选井孔</button>
      </div>
    </>
  )
}
export default Home

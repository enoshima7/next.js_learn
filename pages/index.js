import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
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
      </div>
      <div>
        <button onClick={gotoXJJ}>选井孔</button>
      </div>
    </>
  )
}
export default Home

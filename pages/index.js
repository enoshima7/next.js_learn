import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  function gotoA() {
    Router.push('/jspangA')
  }
  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href='/jspangA'>
          <a>jspangA</a>
        </Link>
      </div>
      <div>
        <Link href='/jspangB'>
          <a>jspangB</a>
        </Link>
      </div>
      <div>
        <button onClick={gotoA}>去A</button>
        <button onClick={gotoA}>去B</button>
      </div>
    </>
  )
}
export default Home

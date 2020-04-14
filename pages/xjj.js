import { withRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const xjj = ({ router, data }) => {
  return (
    <>
      <div>{data}</div>
      <div>{router.query.name} 来服务了</div>
      <Link href='/'>
        <a>返回首页</a>
      </Link>
    </>
  )
}
xjj.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios('http://localhost:4001/data/data.json').then((res) => {
      console.log('远程数据', res.data.data)
      resolve(res.data)
    })
  })
  return await promise
}
export default withRouter(xjj)

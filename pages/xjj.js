import { withRouter } from 'next/router'
import Link from 'next/link'
const xjj = ({ router }) => {
  return (
    <>
      <div>{router.query.name} 来服务了</div>
      <Link href='/'>
        <a>返回首页</a>
      </Link>
    </>
  )
}

export default withRouter(xjj)

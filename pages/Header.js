import MyHead from '../components/Head'
import '../static/test.css'
import { Button } from 'antd'
function header() {
  return (
    <>
      <MyHead />
      <div>Head</div>
      <div>
        <Button>点击</Button>
      </div>
    </>
  )
}
export default header

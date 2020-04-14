import { useState } from 'react'
import dynamic from 'next/dynamic'
const One = dynamic(import('../components/one'))
function time() {
  const [nowtime, settime] = useState(Date.now())
  const changeTimeFormat = async () => {
    const moment = await import('moment')
    settime(moment.default(Date.now()).format())
  }
  return (
    <>
      <div>
        <h1>现实时间：{nowtime}</h1>
        <One />
        <button onClick={changeTimeFormat}>改变时间格式</button>
      </div>
    </>
  )
}
export default time

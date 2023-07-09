import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import TimerUp from "./TimerUp"
import TimerDown from "./TimerDown"

const Counter = () => {
  return (
    <div>
      <h1 className="header">그저 개발 공부를 위한 타이머⌛️</h1>

      <Tabs defaultActiveKey="default" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="default" title="기능 소개">
          <div className="timer-display">원하는 타이머를 선택하세요</div>
        </Tab>
        <Tab eventKey="countDown" title="카운트다운">
          <TimerDown></TimerDown>
        </Tab>
        <Tab eventKey="countUp" title="카운트업">
          <TimerUp></TimerUp>
        </Tab>
      </Tabs>
    </div>
  )
}

export default Counter

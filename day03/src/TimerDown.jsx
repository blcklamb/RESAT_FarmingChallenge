import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/esm/Button"

import { useState, useEffect, useRef } from "react"

const TimerDown = () => {
  const [targetTime, setTargetTime] = useState({ hour: 0, minute: 0, second: 0 })
  const [timer, setTimer] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  // 0: initial start, 1: started, 2: paused
  const [mode, setMode] = useState(0)
  const firstStart = useRef(true)
  const tick = useRef()

  useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current
      return
    }

    if (isStarted) {
      if (mode === 0) {
        setMode(1)
      }
      if (timer < 0) {
        setTimer(0)
        alert("타이머가 종료되었습니다")
        setMode(0)
        setIsStarted(false)
      }
      tick.current = setInterval(() => {
        setTimer((timer) => timer - 1)
      }, 1000)
    } else {
      clearInterval(tick.current)
    }
    return () => {
      clearInterval(tick.current)
    }
  }, [isStarted, mode, timer])

  const getTargetCountDownSecond = (timeObj) => {
    return timeObj.hour * 60 * 60 + timeObj.minute * 60 + timeObj.second
  }

  const getSecondToFormat = (totalSeconds) => {
    let hours = Math.floor(totalSeconds / (60 * 60))
    let minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
    let seconds = Math.floor(totalSeconds % 60)

    return [hours.toString().padStart(2, "0"), minutes.toString().padStart(2, "0"), seconds.toString().padStart(2, "0")]
  }

  const submitTargetCount = () => {
    const targetCount = getTargetCountDownSecond(targetTime)
    setTimer(targetCount)
  }

  const handleInputDigit = (event, at) => {
    const limitedValue = parseInt(event.target.value.slice(0, 2))
    setTargetTime({ ...targetTime, [at]: limitedValue })
  }

  const onClickStartButton = () => {
    if (getTargetCountDownSecond(targetTime) === 0) {
      alert("카운트다운할 시간을 설정해주세요")
      return
    }
    mode === 0 && submitTargetCount()
    setIsStarted(true)
  }

  const onClickStopButton = () => {
    if (mode === 0) {
      alert("시간을 설정하고, 타이머 START 버튼을 눌러주세요")
      return
    }
    setMode(2)
    setIsStarted(false)
  }

  const onClickResetButton = () => {
    if (mode === 0) return
    if (window.confirm("정말로 초기화하시겠어요?")) {
      setMode(0)
      setIsStarted(false)
      setTimer(0)
    }
  }

  return (
    <Form>
      {mode === 0 && (
        <Row className="mb-2">
          <Col>
            <Form.Select
              aria-label="hour"
              size="lg"
              value={targetTime.hour}
              onChange={(e) => handleInputDigit(e, "hour")}
            >
              {Array(25)
                .fill()
                .map((_, idx) => {
                  return (
                    <option key={idx} value={idx}>
                      {idx}
                    </option>
                  )
                })}
            </Form.Select>
          </Col>
          :
          <Col>
            <Form.Select
              aria-label="hour"
              size="lg"
              value={targetTime.minute}
              onChange={(e) => handleInputDigit(e, "minute")}
            >
              {Array(60)
                .fill()
                .map((_, idx) => {
                  return (
                    <option key={idx} value={idx}>
                      {idx}
                    </option>
                  )
                })}
            </Form.Select>
          </Col>
          :
          <Col>
            <Form.Select
              aria-label="hour"
              size="lg"
              value={targetTime.second}
              onChange={(e) => handleInputDigit(e, "second")}
            >
              {Array(60)
                .fill()
                .map((_, idx) => {
                  return (
                    <option key={idx} value={idx}>
                      {idx}
                    </option>
                  )
                })}
            </Form.Select>
          </Col>
        </Row>
      )}

      <Row className="mb-2 time-display" style={{ justifyContent: "center" }}>
        {getSecondToFormat(timer)[0]}:{getSecondToFormat(timer)[1]}:{getSecondToFormat(timer)[2]}
      </Row>
      <Row>
        <Col>
          <Button variant="outline-success" size="lg" style={{ width: "100%" }} onClick={() => onClickStartButton()}>
            START
          </Button>
        </Col>
        <Col>
          <Button variant="outline-danger" size="lg" style={{ width: "100%" }} onClick={() => onClickStopButton()}>
            STOP
          </Button>
        </Col>
        <Col>
          <Button variant="outline-warning" size="lg" style={{ width: "100%" }} onClick={() => onClickResetButton()}>
            RESET
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default TimerDown

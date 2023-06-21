import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Row from "react-bootstrap/Row"

const Header = () => {
  return (
    <div>
      <h1 className="">개발 공부 해야지</h1>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Home">
          Tab content for Home
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Tab content for Profile
        </Tab>
      </Tabs>
    </div>
  )
}

export default Header

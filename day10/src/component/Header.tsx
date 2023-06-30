import { Header as AntHeader } from "antd/es/layout/layout";
import { LockOutlined, UnlockOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { Typography } from "antd";

function Header({ isSignedIn }: { isSignedIn: boolean }) {
  const { Text } = Typography;
  return (
    <>
      <AntHeader
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title style={{ color: "#ffffff" }}>
          그저 로그인 &nbsp;
          {isSignedIn && <UnlockOutlined />}
          {!isSignedIn && <LockOutlined />}
        </Title>
      </AntHeader>
      <div style={{ width: "100%", marginTop: "8px" }}>
        <Text keyboard style={{ display: "flex", justifyContent: "center" }}>
          HINT: Tooltip
        </Text>
      </div>
    </>
  );
}

export default Header;

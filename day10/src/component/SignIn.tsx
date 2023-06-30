import { Button, Form, Input, Tooltip, notification } from "antd";

import {
  UserOutlined,
  QuestionCircleOutlined,
  SmileOutlined,
  MehOutlined,
} from "@ant-design/icons";
import { useState } from "react";

function SignIn({ onCompleteSignIn }: { onCompleteSignIn: () => void }) {
  const [isNotSame, setIsNotSame] = useState<boolean>(false);
  const ID = "id";
  const PASSWORD = "password";

  const openNotification = () => {
    notification.open({
      message: "로그인 성공했어요!",
      description: "지금까지 파밍 챌린지였습니다!🌾",
      icon: <SmileOutlined style={{ color: "#a0d911" }} />,
      onClose: () => {
        window.location.href =
          "https://github.com/blcklamb/RESAT_FarmingChallenge";
      },
    });
  };

  const openFailNotification = () => {
    notification.open({
      message: "로그인을 실패했어요!",
      description: "툴팁을 잘 살펴봐요",
      icon: <MehOutlined style={{ color: "#f5222d" }} />,
    });
  };

  const onFinish = (values: any) => {
    const { id: enteredId, password: enteredPW } = values;
    console.log(enteredId, enteredPW);
    if (enteredId === ID && enteredPW === PASSWORD) {
      openNotification();
      onCompleteSignIn();
    } else {
      openFailNotification();
      setIsNotSame(true);
    }
  };

  const IDLabel = () => {
    return (
      <>
        아이디 ID
        <Tooltip
          placement="rightTop"
          title={`아이디는 ${ID}입니다.`}
          arrow={true}
        >
          <div style={{ marginLeft: "8px" }}>
            <QuestionCircleOutlined />
          </div>
        </Tooltip>
      </>
    );
  };

  const PWLabel = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        비밀번호 PASSWORD
        <Tooltip
          placement="rightTop"
          title={`비밀번호는 ${PASSWORD}입니다.`}
          arrow={true}
        >
          <div style={{ marginLeft: "8px" }}>
            <QuestionCircleOutlined />
          </div>
        </Tooltip>
      </div>
    );
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{
        marginTop: "50px",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
    >
      <>
        <Form.Item
          label={<IDLabel />}
          name="id"
          hasFeedback={isNotSame}
          validateStatus={isNotSame ? "error" : ""}
          rules={[{ required: true, message: "아이디를 입력하세요." }]}
          style={{ minWidth: "290px" }}
        >
          <div style={{ width: "290px" }}>
            <Input suffix={<UserOutlined className="site-form-item-icon" />} />
          </div>
        </Form.Item>
        <Form.Item
          label={<PWLabel />}
          name="password"
          hasFeedback={isNotSame}
          validateStatus={isNotSame ? "error" : ""}
          rules={[{ required: true, message: "비밀번호를 입력하세요." }]}
        >
          <div style={{ width: "290px" }}>
            <Input.Password />
          </div>
        </Form.Item>
      </>
      <Form.Item wrapperCol={{ span: 16 }}>
        <Button type="primary" htmlType="submit">
          로그인하기
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SignIn;

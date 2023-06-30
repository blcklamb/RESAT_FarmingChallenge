import { useState } from "react";
import Header from "./component/Header";
import SignIn from "./component/SignIn";

function App() {
  const [signInCompleted, setSignInCompleted] = useState<boolean>(false);
  const onCompleteSignIn = () => {
    setSignInCompleted(true);
  };
  return (
    <div className="App">
      <Header isSignedIn={signInCompleted} />
      <SignIn onCompleteSignIn={onCompleteSignIn} />
    </div>
  );
}

export default App;

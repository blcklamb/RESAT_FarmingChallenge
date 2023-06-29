import SVGLoader from "./assets/SVGLoader.tsx";
import Header from "./component/Header.tsx";
import { GlobalStyle } from "./style/global-style.ts";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <SVGLoader />
      <Header />
    </div>
  );
}

export default App;

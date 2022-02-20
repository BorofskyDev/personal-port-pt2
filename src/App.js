import "./App.scss";
import "./index.scss";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/Contact/Earth";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import History from "./components/History/History";
import { TopSection } from "./components/Contact/Contact";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <CanvasContainer>
      <Navbar />
      <Main />
      <Technologies />
      <Projects />
      {/* <History /> */}
      <TopSection />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;

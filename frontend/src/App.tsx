import Theme from "./components/Theme";
import LandingPage from "./pages/LandingPage";
import { GlobalStateProvider } from "./store/GlobalStateProvider";

function App() {
  return (
    <GlobalStateProvider>
      <Theme>
        <LandingPage />
      </Theme>
    </GlobalStateProvider>
  );
}

export default App;

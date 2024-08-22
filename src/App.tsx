import { CepProvider } from "./contexts/CepContext";
import Main from "./pages/main";

function App() {
  return (
    <CepProvider>
      <Main />
    </CepProvider>
  );
}

export default App;

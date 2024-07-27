import AppRoutes from "./routes/Routes";
import "./App.scss";
import AuthModal from "./components/AuthModal/AuthModal";

function App() {
  return (
    <>
      <AuthModal />
      <AppRoutes />
    </>
  );
}

export default App;

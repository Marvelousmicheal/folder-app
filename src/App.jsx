import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
import { Route,Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./assets/components/ProtectedRoute";



function App() {
  return (
    <>
  <AuthContext>

<Routes>
  <Route path="/" element={<ProtectedRoute>
    <Home/>
  </ProtectedRoute>}/>
  <Route path="/sign-up" element={<Signup/>}/>
  <Route path="/login" element={<Login/>}/>
</Routes>
  </AuthContext>
 

    </>
  );
}

export default App;

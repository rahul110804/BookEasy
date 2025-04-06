import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Home from "./Pages/user/Home";
import EventDetails from "./Pages/user/EventDetails";
import Dashboard from "./Pages/business/Dashboard";
import AddEvent from "./Pages/business/AddEvent";
import NotFound from "./Pages/NotFound";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* User */}
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetails />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Business */}
          <Route path="/business/dashboard" element={<Dashboard />} />
          <Route path="/business/add-event" element={<AddEvent />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

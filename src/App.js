import "./App.css";
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";

import Discover from "./views/Discover";
import TopRated from "./views/TopRated";
import Upcoming from "./views/Upcoming";
import Details from "./views/Details";
import Profile from "./views/Profile";

function App() {
  return (
    <Router>
      <Container className="navbar navbar-expand-sm bg-dark navbar-light sticky-top">
      <div className="container-fluid">
        <Nav>

          <Nav.Item>
            <Nav.Link href="/">
              <Link to="/">Discover</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <Link to="/TopRated">Top Rated</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <Link to="/Upcoming">Upcoming</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <Link to="/Profile">Profile</Link>
            </Nav.Link>
          </Nav.Item>

        </Nav>
        </div>
      </Container>

      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/TopRated" element={<TopRated />} />
        <Route path="/Upcoming" element={<Upcoming />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;

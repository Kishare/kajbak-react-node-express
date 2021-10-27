import React, { useEffect, useState } from "react";
import "./login.css";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer.js";
import Axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      console.log("voici ta réponse:", response);
      if (!response.data.auth) {
        setLoginStatus(false);
      } else {
        console.log(response.data);
        setLoginStatus(true);
      }
      console.log(response.data);
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      // si logged in est true, alors on affiche le nom de l'user
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].firstname);
      }
    });
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <div className="login-form">
              <h1 className="login-title">Se connecter</h1>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Adresse mail</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                  />
                </Form.Group>

                <Button
                  onClick={login}
                  variant="success"
                  style={{ backgroundColor: "#0f6860" }}
                >
                  Connexion
                </Button>
                <h1>
                  {loginStatus && <button>Check if Authenticated</button>}
                </h1>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import "./register.css";
import { Container, Row, Form, Col, Button, Navbar } from "react-bootstrap";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import Axios from "axios";

function Register() {
  // initialisation des hooks

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  Axios.defaults.withCredentials = true;

  // fonction register avec requete qui envoie les données entrées
  // et les enrengistre dans la bdd grâce au serveur en back

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      address: address,
      city: city,
      zip: zip,
      phonenumber: phonenumber,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <div className="register-box">
              <h1 className="register-title">S'inscrire</h1>
              <Form>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Adresse mail</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicConfirmedPassword">
                  <Form.Label>Confirmer le mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmedPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicAddress">
                  <Form.Label>Adresse</Form.Label>
                  <Form.Control
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicCity">
                  <Form.Label>Ville</Form.Label>
                  <Form.Control
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicZip">
                  <Form.Label>Code Postal</Form.Label>
                  <Form.Control
                    type="number"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPhoneNumber">
                  <Form.Label>Numéro de téléphone</Form.Label>
                  <Form.Control
                    type="tel"
                    value={phonenumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>

                <Button
                  variant="success"
                  style={{ backgroundColor: "#0f6860" }}
                  onClick={register}
                >
                  Confirmer l'inscription
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Register;

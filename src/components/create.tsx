import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("Litro");
  const navigate = useNavigate();

  const postData = (e: any) => {
    e.preventDefault();
    api
      .post("/fakedata", {
        name,
        amount,
        price,
        unit,
      })
      .then(() => {
        alert("Produto registrado com sucesso");
        navigate("/read");
      });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Produto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o produto"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control
            type="number"
            placeholder="Digite a quantidade"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Preço (Unidade)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Digite o preco por unidade"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Label>Unidade de medida</Form.Label>
        <Form.Select
          className="mb-3"
          aria-label="Default select example"
          value={unit}
          onChange={(e) => {
            setUnit(e.target.value);
          }}
        >
          <option value="Litro">Litro</option>
          <option value="Metro">Metro</option>
          <option value="Grama">Grama</option>
          <option value="Metro Cúbico">Metro Cúbico</option>
        </Form.Select>
        <Button variant="primary" type="submit" onClick={postData}>
          Registrar
        </Button>
      </Form>
      <div style={{ marginTop: "20px" }}>
        <Link to="/read">
          <Button variant="success">Visualizar produtos</Button>
        </Link>
      </div>
    </div>
  );
}

export default Create;

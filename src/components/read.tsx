import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";

type apiItems = {
  id: number;
  name: string;
  amount: string;
  price: number;
  unit: string;
};

export default function Read() {
  const [APIData, setAPIData] = useState<apiItems[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    api
      .get("/fakedata")
      .then((response) => {
        setAPIData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  const onDelete = (id: any) => {
    api
      .delete(`fakedata/${id}`)
      .then(() => {
        alert("Produto deletado com sucesso");
        getData();
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const getData = () => {
    api
      .get("fakeData")
      .then((getData) => {
        setAPIData(getData.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <Table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Preço (Unidade)</th>
            <th>Unidade de medida</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>R$ {item.price}</td>
                <td>{item.unit}</td>
                <td>
                  <Button variant="danger" onClick={() => onDelete(item.id)}>
                    🗑️
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div style={{ marginTop: "20px" }}>
        <Link to="/">
          <Button variant="success">Voltar a HOME</Button>
        </Link>
      </div>
    </div>
  );
}

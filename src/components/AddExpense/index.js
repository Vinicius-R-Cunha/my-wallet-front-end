import Header from "../Header";
import { AddDiv, AddForm } from "./style";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import NumberFormat from "react-number-format";

export default function AddExpense() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    }
  }, [token, navigate]);

  function handleSubmit(e) {
    e.preventDefault();

    const promise = axios.post(
      `${process.env.REACT_APP_BACK_URL}/wallet`,
      { value, description, expense: true },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promise.then(() => navigate("/"));
    promise.catch((answer) => console.log(answer.response));
  }

  function rightToLeftFormatter(value) {
    if (!Number(value)) return "";

    let amount = "";
    if (amount.length > 2) {
      amount = parseInt(value).toFixed(2).replace(".", ",");
    } else {
      amount = (parseInt(value) / 100).toFixed(2).replace(".", ",");
    }

    return `${amount}`;
  }

  return (
    <AddDiv>
      <Header text={"Nova saída"} />
      <AddForm>
        <NumberFormat
          placeholder="Valor"
          decimalScale={2}
          maxLength={12}
          format={rightToLeftFormatter}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <input
          type="text"
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button onClick={(e) => handleSubmit(e)}> Salvar saída</button>
      </AddForm>
    </AddDiv>
  );
}

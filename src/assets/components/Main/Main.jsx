import { useState } from "react";
import fetchData from "../../helpers/fetchData";
import Search from "../Search";
import Temp from "../Temp.jsx";
import NotFound from "../NotFound";

function Main() {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(true);
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [message, setMessage] = useState(
    "Digite o nome da cidade cuja temperatura gostaria de saber:"
  );
  const [cod, setCod] = useState(0);
  const handleClick = async (e) => {
    e.preventDefault();
    if (city === "") {
      setMessage("O nome da cidade não pode ser vazio!");
    } else {
      setLoading(true);
      const info = await fetchData(city.trim());
      if (info.status) {
        setCod(200);
        setData(info.data);
        console.log(info.data);
        setLoading(false);
        setActive(!active);
      } else {
        setCod(404);
        setLoading(false);
        setActive(!active);
      }
    }
  };
  return (
    <>
      {active ? (
        <Search
          message={message}
          city={city}
          setCity={setCity}
          handleClick={handleClick}
          loading={loading}
        />
      ) : cod === 200 ? (
        <Temp setActive={setActive} active={active} data={data} />
      ) : (
        <NotFound setActive={setActive} active={active} />
      )}
    </>
  );
}

export default Main;

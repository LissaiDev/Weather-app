import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Lottie from "lottie-react";
import Loading from "../../animations/loading.json";
import fetchData from "../../helpers/fetchData";

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
      const info = await fetchData(city);
      if (info.status) {
        setCod(200);
        setData(info.data);
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
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.8, type: "spring" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="col-11 col-md-6 p-3"
          >
            <h1 className="text-center">Olá visitante!</h1>
            <form className="text-center">
              <label className="mt-3 mb-3 d-block lead" htmlFor="cidade">
                {message}
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Digite o nome da cidade"
              />
              <motion.button
                onClick={handleClick}
                whileTap={{ scale: 0.8 }}
                className="botao text-center rounded-5"
              >
                <span>
                  {loading ? (
                    <Lottie
                      animationData={Loading}
                      style={{
                        maxWidth: "40px",
                        maxHeight: "40px",
                        margin: "auto",
                      }}
                      loop={true}
                    />
                  ) : (
                    "Enviar"
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </AnimatePresence>
      ) : cod === 200 ? (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.8, type: "spring", delay: 0.8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="col-11 col-md-8 p-5 rounded-4 info"
        >
          <div className="d-flex fw-bold justify-content-between mb-4">
            <span onClick={() => setActive(!active)} className="name">
              {data.name}
            </span>
            <span>{new Date().toLocaleTimeString()}</span>
          </div>
          <div className="d-flex flex-column align-items-center mb-4">
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt=""
            />
            <span className="description fs-5">
              {data.weather[0].description}
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <div className=" d-flex flex-column">
              <div>
                <i className="me-3 icon fs-4 bi bi-wind"></i>
                <span>{data.wind.speed} m/s</span>
              </div>
              <div className="">
                <i className="me-3 icon fs-4 bi bi-droplet-fill"></i>
                <span>{data.main.humidity}%</span>
              </div>
              <div>
                <i className="me-3 icon fs-4 bi bi-compass-fill"></i>
                <span>{data.main.pressure} hPa</span>
              </div>
            </div>
            <div>
              <span className="display-2">{data.main.temp} °C</span>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.8, type: "spring", delay: 0.8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="col-11 col-md-8 p-5 rounded-4 info"
          onClick={() => setActive(!active)}
        >
          <div className="p-5">
            <h1 className="display-2 text-center">404</h1>
            <p className="lead text-center">Cidade não encontrada</p>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Main;

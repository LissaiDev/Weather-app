/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import variants from "../../helpers/variants";
function Temp({ setActive, active, data }) {
  return (
    <AnimatePresence>
      <motion.div
        onClick={() => setActive(!active)}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="col-11 col-md-9 p-5 rounded-4 info"
      >
        <div className="d-flex fw-bold justify-content-between mb-4">
          <span className="name">{data.name}</span>
          <span>{data.sys.country}</span>
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
              <i className="me-3 icon fs-5 bi bi-wind"></i>
              <span>{data.wind.speed} m/s</span>
            </div>
            <div className="">
              <i className="me-3 icon fs-5 bi bi-droplet-fill"></i>
              <span>{data.main.humidity}%</span>
            </div>
            <div>
              <i className="me-3 icon fs-5 bi bi-compass-fill"></i>
              <span>{data.main.pressure} hPa</span>
            </div>
          </div>
          <div>
            <span className="display-2">{data.main.temp} °C</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Temp;

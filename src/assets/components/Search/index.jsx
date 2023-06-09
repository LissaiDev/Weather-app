import {motion, AnimatePresence} from "framer-motion"
import Lottie from "lottie-react"
import Loading from "../../animations/loading.json"
import variants from "../../helpers/variants"
// eslint-disable-next-line react/prop-types
function Search({message, city, setCity, handleClick, loading}) {
  return (
    <AnimatePresence>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
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
  )
}

export default Search;
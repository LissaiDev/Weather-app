import { motion, AnimatePresence } from "framer-motion";
import variants from "../../helpers/variants";

// eslint-disable-next-line react/prop-types
function NotFound({ setActive, active }) {
  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="col-11 col-md-8 p-5 rounded-4 info"
        onClick={() => setActive(!active)}
      >
        <div className="p-5">
          <h1 className="display-2 text-center">404</h1>
          <p className="lead text-center">Cidade não encontrada</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default NotFound;

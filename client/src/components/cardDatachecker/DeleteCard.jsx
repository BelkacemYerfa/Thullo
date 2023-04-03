import { motion } from "framer-motion";
import { useDataLayervValue } from "../../config/dataLayer";

export const DeleteCard = ({ handleToggle, CardId }) => {
  const [{ toDoList }, dispatch] = useDataLayervValue();
  console.log(CardId);
  const ClosePop = () => {
    handleToggle(false);
  };
  const deleteCard = () => {
    ClosePop();
    toDoList.map((item) => {
      if (item?.id === CardId) {
        delete toDoList[CardId - 1];
        dispatch({
          type: "DELETE_TASK",
          toDoList: toDoList,
        });
      }
      return true;
    });
  };
  return (
    <motion.div
      initial={{
        y: "100vh",
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      className="DeletePopOut"
    >
      <motion.div
        initial={{
          scale: 0,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{ delay: 0.25 }}
        className="deletePop"
      >
        <h2 className="DeleteText">Do you want to delete this card ?</h2>
        <div className="btnHodler">
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="CommentBtn YupBtn"
            onClick={deleteCard}
          >
            Yup
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="CommentBtn NopeBtn"
            onClick={ClosePop}
          >
            Nope
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

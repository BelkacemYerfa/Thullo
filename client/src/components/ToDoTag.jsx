import { motion } from "framer-motion";
import { useState } from "react";
import { AddToList } from "./addToList";
import { AddCard } from "./cardDatachecker/AddCard";
import { DeleteCard } from "./cardDatachecker/DeleteCard";
import { RenameCard } from "./cardDatachecker/RenameCard";
import { TaskCard } from "./taskCard";
import { Draggable, Droppable } from "react-beautiful-dnd";

export const ToDoTag = ({ tag, task, id, index }) => {
  const [settToggle, setSettToggle] = useState(false);
  const [CardDelete, setCardDelete] = useState(false);
  const [CardRename, setCardRename] = useState(false);
  const [CardAdd, setAddCard] = useState(false);
  const handleRenameCard = (toggle) => {
    setCardRename(toggle);
  };
  const handleDeleteCard = (toggle) => {
    setCardDelete(toggle);
  };
  const handleAddToggle = (toggle) => {
    setAddCard(toggle);
  };
  const handleAddCard = (toggle) => {
    setAddCard(toggle);
  };
  return (
    <>
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div className="taskcolumn">
              <div className="tag">
                <p className="tagname">{tag}</p>
                <motion.div
                  whileTap={{
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.1,
                  }}
                  className="spred"
                  onClick={() => {
                    setSettToggle(!settToggle);
                  }}
                >
                  <span className="material-symbols-rounded">more_horiz</span>
                </motion.div>
                {settToggle && (
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    exit={{
                      scale: 0,
                    }}
                    className="taskColumnSettings"
                  >
                    <div
                      className="SettingInfo"
                      onClick={() => {
                        setCardRename(true);
                        setSettToggle(false);
                      }}
                    >
                      Rename
                      <span className="material-symbols-rounded">edit</span>
                    </div>
                    <hr />
                    <div
                      onClick={() => {
                        setCardDelete(true);
                        setSettToggle(false);
                      }}
                      className="SettingInfo deleteList"
                    >
                      Delete this list
                      <span className="material-symbols-rounded">delete</span>
                    </div>
                  </motion.div>
                )}
              </div>
              <Droppable droppableId={id}>
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    <div className="toDoCards">
                      {task?.map((task, index) => (
                        <Draggable
                          draggableId={task?.id}
                          index={index}
                          key={task?.id}
                        >
                          {(provided) => (
                            <div
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                              ref={provided.innerRef}
                              key={task?.id}
                            >
                              <TaskCard
                                key={task?.id}
                                id={task?.id}
                                title={task?.title}
                                image={task?.image}
                                tags={task?.tags}
                                comments={task?.comments}
                                description={task?.description}
                                tag={tag}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      <AddToList
                        holder="Add to list"
                        handleToggle={handleAddToggle}
                      />
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        )}
      </Draggable>
      {CardDelete && <DeleteCard handleToggle={handleDeleteCard} CardId={id} />}
      {CardRename && <RenameCard handleToggle={handleRenameCard} CardId={id} />}
      {CardAdd && <AddCard handleToggle={handleAddCard} listId={id} />}
    </>
  );
};

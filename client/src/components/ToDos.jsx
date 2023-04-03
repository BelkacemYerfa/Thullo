import { ToDoTag } from "./ToDoTag";
import { useDataLayervValue } from "../config/dataLayer";
import { useState } from "react";
import { motion } from "framer-motion";
import { AddList } from "./ListSettings/AddList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const ToDos = () => {
  const [{ toDoList }, dispatch] = useDataLayervValue();

  const [addList, setAddList] = useState(false);

  const handleToggleState = (toggle) => {
    setAddList(toggle);
  };

  const handleDragDrop = (results) => {
    console.log(results);
    const { source, destination, type } = results;
    if (
      !destination ||
      (destination.index === source.index &&
        destination.droppableId === source.droppableId)
    )
      return;
    if (type === "group") {
      const newToDoList = [...toDoList];
      const [removed] = newToDoList.splice(source.index, 1);
      newToDoList.splice(destination.index, 0, removed);
      dispatch({
        type: "SET_TODOLIST",
        toDoList: newToDoList,
      });
    }
    const itemSourceIndex = source.index;
    const itemDestinationIndex = destination.index;

    const storeSourceIndex = toDoList.findIndex(
      (store) => store.id === source.droppableId
    );
    //in the id section you need to make sure that your not parsing the ids
    const storeDestinationIndex = toDoList.findIndex(
      (store) => store.id === destination.droppableId
    );

    const newSourceItems = [...toDoList[storeSourceIndex].task];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...toDoList[storeDestinationIndex].task]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
    newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

    const newStores = [...toDoList];

    newStores[storeSourceIndex] = {
      ...toDoList[storeSourceIndex],
      task: newSourceItems,
    };
    newStores[storeDestinationIndex] = {
      ...toDoList[storeDestinationIndex],
      task: newDestinationItems,
    };
    dispatch({
      type: "SET_TODOLIST",
      toDoList: newStores,
    });
  };

  return (
    <>
      <div className="toDo">
        <DragDropContext onDragEnd={handleDragDrop}>
          <div className="tasksHolder">
            {toDoList?.map((tag, index) => (
              <Droppable
                droppableId={tag?.id}
                key={tag?.id}
                index={index}
                type="group"
              >
                {(provided) => (
                  <section
                    key={tag?.id}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <ToDoTag
                      key={tag?.id}
                      tag={tag?.tag}
                      task={tag?.task}
                      id={tag?.id}
                      index={index}
                    />
                    {provided.placeholder}
                  </section>
                )}
              </Droppable>
            ))}
            <motion.div
              whileTap={{
                scale: 0.9,
              }}
              style={{
                width: 300,
              }}
              className="addListUnique"
              onClick={() => {
                setAddList(true);
              }}
            >
              <div className="uniqueTag">
                <p className="addText">Add another List</p>
                <motion.div
                  whileTap={{
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.1,
                  }}
                  className="spred"
                >
                  <span className="material-symbols-rounded">add</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </DragDropContext>
      </div>
      {addList && <AddList handleToggle={handleToggleState} />}
    </>
  );
};

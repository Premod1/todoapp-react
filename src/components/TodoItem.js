import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import "./TodoItem.css";
import { useState } from "react";
function TodoItem({ todo, index, todos, setTodos }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  const handaleDelete = () => {
    const newTodos = todos.filter((item) => {
      if (todo.id === item.id) {
        return false;
      } else {
        return true;
      }
    });
    setTodos(newTodos);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
    setEditTodo(todo.name);
  };

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      const newTodos = todos.map((item) => {
        if (todo.id === item.id) {
          return {
            ...item,
            name: editTodo,
          };
        } else {
          return item;
        }
      });
      setTodos(newTodos);
      setIsEdit(false);
    }
  };

  const handleCompleted = () => {
    const newTodos = todos.map((item) => {
        if(item.id === todo.id) {
            return {
                ...item,
                isCompleted: !item.isCompleted,
            };
        } else {
            return item
        }
    });
    setTodos(newTodos);
  }
  return (
    <div className="todo-item-wrapper">
      <div className="todo-item-text">
        <div>{index}.</div>
        {isEdit ? (
          <input
            type="text"
            value={editTodo}
            onChange={(e) => {
              setEditTodo(e.target.value);
            }}
            onKeyDown={handleSubmit}
          />
        ) : (
          <div onClick={handleCompleted}
            style={{
              textDecorationLine: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {todo.name}
          </div>
        )}
      </div>
      <div className="todo-item-button">
        <button>
          <PencilIcon className="pencil-button" onClick={handleEdit} />
        </button>
        <button>
          <TrashIcon className="trash-button" onClick={handaleDelete} />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;

import { useGetTodosForUserQuery } from "../Todo/todoSlice";
import TodoPostCard from "./TodoPostCard";

const Todolist = ({ user }) => {
  const { data, isLoading, isError, error } = useGetTodosForUserQuery(user);
  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }

  if (isError) {
    return <p className="text-white">Error loading {user} todos</p>;
  }

  if (data) {
    return (
      <div>
        {Object.values(data.entities).map((todo) => (
          <TodoPostCard id={todo._id} todo={todo} />
        ))}
      </div>
    );
  }

  return null;
};
export default Todolist;

import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { loadTodos } from "../store/todoSlice";
import { FilterTypeEnum } from "../constants";

import TodoList from "../components/TodoList";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";

const HomePage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(
            loadTodos({
                page: 1,
                filter: FilterTypeEnum.ALL,
            })
        );
    }, [dispatch]);
      return (
        <div>
          <ThemeToggle />
          <TodoList />
        </div>
      )
}


export default HomePage;
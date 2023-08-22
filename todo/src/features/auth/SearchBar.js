import React, { useState, useEffect } from "react";
import { useGetSearchedUsersQuery } from "../Users/userSlice";
import { useGetSearchedTodosQuery } from "../Todo/todoSlice";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const {
    data: searchedUsers,
    isLoading: usersIsLoading,
    isError: usersIsError,
    error: usersError,
  } = useGetSearchedUsersQuery(searchTerm, { skip: !searchTerm });

  const {
    data: searchedTodos,
    isLoading: todosIsLoading,
    isError: todosIsError,
    error: todosError,
  } = useGetSearchedTodosQuery(searchTerm, { skip: !searchTerm });
  // console.log("usersIsLoading:", usersIsLoading);
  // console.log("usersIsError:", usersIsError);
  // console.log("usersError:", usersError);
  // console.log("todosIsLoading:", todosIsLoading);
  // console.log("todosIsError:", todosIsError);
  // console.log("todosError:", todosError);

  // console.log("searchedUsers component:", searchedUsers);
  // console.log("searchedTodos component:", searchedTodos);

  useEffect(() => {
    if (searchedUsers || searchedTodos) {
      setSearchResults([
        ...(searchedUsers?.ids || []),
        ...(searchedTodos?.ids || []),
      ]);
    }
  }, [searchedUsers, searchedTodos]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    // <form>
    //   <label
    //     htmlFor="default-search"
    //     className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    //   >
    //     Search
    //   </label>
    //   <div className="relative">
    //     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    //       <svg
    //         aria-hidden="true"
    //         className="w-5 h-5 text-gray-500 dark:text-gray-400"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //         ></path>
    //       </svg>
    //     </div>
    //     <input
    //       type="search"
    //       id="default-search"
    //       className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //       placeholder="Search Users,Tasks,Jobs..."
    //       required
    //       value={searchTerm}
    //       onChange={handleSearch}
    //     />
    //     <div className="bg-grey w-[400px] ">
    //       <ul>
    //         {Array.isArray(searchedUsers?.ids) &&
    //           searchedUsers.ids.map((id) => (
    //             <Link to={`/profile/${searchedUsers.entities[id].email}`}>
    //               <li key={id}>{searchedUsers.entities[id].email}</li>
    //             </Link>
    //           ))}
    //         {Array.isArray(searchedTodos?.ids) &&
    //           searchedTodos.ids.map((id) => (
    //             <li className="text-white" key={id}>
    //               {searchedTodos.entities[id].description}
    //               {searchedTodos.entities[id].date}
    //               {searchedTodos.entities[id].completed}
    //             </li>
    //           ))}
    //       </ul>
    //     </div>

    //     <button
    //       type="submit"
    //       onClick={submit}
    //       className="text-black absolute right-2.5 bottom-2.5 bg-primary/70 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary/30 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       Search
    //     </button>
    //   </div>
    // </form>
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Users,Tasks,Jobs..."
          required
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="bg-grey w-[400px] ">
          <ul>
            {Array.isArray(searchedUsers?.ids) &&
              searchedUsers.ids.map((id) => (
                <Link to={`/profile/${searchedUsers.entities[id].email}`}>
                  <li key={id} className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {searchedUsers.entities[id].email}
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                      Search result description...
                    </p>
                  </li>
                </Link>
              ))}
            {Array.isArray(searchedTodos?.ids) &&
              searchedTodos.ids.map((id) => (
                <li key={id} className="p-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {searchedTodos.entities[id].description}
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">
                    {searchedTodos.entities[id].date}
                  </p>
                </li>
              ))}
          </ul>
        </div>

        <button
          type="submit"
          onClick={submit}
          className="text-black absolute right-2.5 bottom-2.5 bg-primary/70 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary/30 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

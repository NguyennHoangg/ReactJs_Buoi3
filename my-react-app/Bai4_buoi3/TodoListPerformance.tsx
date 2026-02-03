import React, { useCallback, useMemo, useState } from "react";

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

export default function TodoListPerformance() {
  // TODO: Khai báo state cho todos và inputValue
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  // TODO: Viết hàm addTodo để thêm todo mới

  const addTodo = useCallback(() => {
    if (inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(), // Tạo id unique
      name: inputValue.trim(),
      completed: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    setInputValue(""); // Xóa input sau khi thêm
  }, [inputValue]); // Thêm dependency

  // TODO: Viết hàm toggleTodo để đánh dấu hoàn thành/chưa hoàn thành
  const toggleTodo = useCallback((item: any) => {
    deleteTodo(item);
  }, []);
  // TODO: Viết hàm deleteTodo để xóa todo
  const deleteTodo = useCallback(
    (todoItem: any) => {
      setTodoList((prev) =>
        todoList.filter((todo) => todo.name.includes(todoItem.name)),
      );
    },
    [todoList],
  );
  // TODO: Sử dụng useMemo để tính incompleteTodos (todos chưa hoàn thành)
  const incompleteTodos = useMemo(
    () => todoList.filter((todo) => !todo.completed),
    [todoList],
  );
  // TODO: Sử dụng useMemo để tính completedTodos (todos đã hoàn thành)
  const completedTodos = useMemo(
    () => todoList.filter((todo) => todo.completed),
    [todoList],
  );

  return (
    <div className="w-full min-h-screen p-4 from-blue-50 to-indigo-100">
      <div className="w-full mx-auto bg-white rounded-lg shadow-lg p-8 min-h-[calc(100vh-2rem)]">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          📝 Todo App
        </h1>

        {/* Form thêm todo */}
        <div className="flex gap-2 mb-8">
          <input
            className="flex-1 h-10 px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="Thêm todo mới..."
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="bg-indigo-500 px-6 h-10 rounded-lg text-white font-semibold hover:bg-indigo-600 active:scale-95 transition-all shadow-md"
            // TODO: Thêm onClick
            onClick={addTodo}
          >
            ➕ Add
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Cột bên trái: Chưa hoàn thành */}
          <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-200">
            <h2 className="text-xl font-bold text-yellow-700 mb-4 flex items-center gap-2">
              ⏳ Chưa hoàn thành
              <span className="text-sm bg-yellow-200 px-2 py-1 rounded-full">
                {/* TODO: Hiển thị số lượng todo chưa hoàn thành */}
                {incompleteTodos.length || 0}
              </span>
            </h2>
            <div className="space-y-2">
              {incompleteTodos.length === 0 ? (
                <p className="text-gray-400 text-center py-4">
                  Không có công việc nào
                </p>
              ) : (
                incompleteTodos.map((todo) => (
                  <div
                    key={todo.id}
                    className="bg-white p-3 rounded-lg shadow-sm border border-yellow-100 flex items-center justify-between gap-2 hover:shadow-md transition-shadow"
                  >
                    <span className="flex-1 text-gray-800">{todo.name}</span>
                    <div className="flex gap-2">
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors text-sm"
                        title="Hoàn thành"
                      >
                        ✓
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-sm"
                        title="Xóa"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Cột bên phải: Đã hoàn thành */}
          <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
            <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
              ✅ Đã hoàn thành
              <span className="text-sm bg-green-200 px-2 py-1 rounded-full">
                {/* TODO: Hiển thị số lượng todo đã hoàn thành */}
                {completedTodos.length || 0}
              </span>
            </h2>
            <div className="space-y-2">
              {/* TODO: Hiển thị message khi không có todo hoàn thành */}
              {completedTodos.length === 0 ? (
                <p className="text-gray-400 text-center py-4">
                  Chưa có công việc hoàn thành
                </p>
              ) : (
                completedTodos.map(todo => (
                  <div key={todo.id} className="bg-white p-3 rounded-lg shadow-sm border border-green-100 flex items-center justify-between gap-2 hover:shadow-md transition-shadow">
                  <span className="flex-1 text-gray-500">{todo.name}</span>
                  <div className="flex gap-2">
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors text-sm"
                      title="Hoàn tác"
                    >
                      ↶
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-sm"
                      title="Xóa"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Thống kê */}
        <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <p className="text-center text-indigo-700 font-semibold">
            {/* TODO: Hiển thị thống kê số lượng todo */}
            📊 Tổng số: 0 công việc | ⏳ Chưa xong: 0 | ✅ Hoàn thành: 0
          </p>
        </div>
      </div>
    </div>
  );
}

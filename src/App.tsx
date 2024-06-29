import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  return (
    <div className="container mx-auto mt-8 flex gap-6 justify-center items-center">
      <button
        onClick={() => dispatch(increment())}
        className="px-3 py-2 rounded-md bg-violet-500 inline-flex items-center h-12 text-xl text-white font-semibold hover:bg-violet-600"
      >
        Increment
      </button>
      <h1 className="text-3xl flex my-3 border-2 rounded-md font-semibold items-center h-16 border-blue-600 p-4">
        {count}
      </h1>
      <button
        onClick={() => dispatch(decrement())}
        className="px-3 py-2 rounded-md bg-violet-500 items-center h-12 inline-flex text-xl text-white font-semibold hover:bg-violet-600"
      >
        Decrement
      </button>
    </div>
  );
}

export default App;

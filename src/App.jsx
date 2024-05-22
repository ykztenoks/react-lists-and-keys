import "./App.css";
import MovieList from "./components/MovieList";
import ProjectList from "./components/ProjectList";
import SimpleList from "./components/SimpleList";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="App">
      <h1>React lists and keys</h1>
      <SimpleList />
      <StudentList />
      <ProjectList />
      <MovieList />
    </div>
  );
}

export default App;

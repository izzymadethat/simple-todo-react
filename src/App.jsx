import Header from "./components/Header";
import ToDoHero from "./components/ToDoHero";
import ToDoForm from "./components/ToDoForm";

export default function App() {
  return (
    <main className="wrapper">
      <Header />
      <ToDoHero />
      <ToDoForm />
    </main>
  );
}

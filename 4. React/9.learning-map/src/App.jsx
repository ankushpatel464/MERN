import List from "./components/List"

function App() {

  const studentArr = ["Ankush","Amit","Aakash","Amit","Aman","Gopi"];

  return (
    <>
    <div className="text-5xl">
      Learning MERN Stack
    </div>

    <List list={studentArr}></List>
    </>
  )
}

export default App

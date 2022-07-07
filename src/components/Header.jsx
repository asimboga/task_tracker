import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
const Header = (tasks, setTasks) => {
  const [show, setShow] = useState(false);
  const [btnStyle, setBtnStyle] = useState({name: "SHOW ADD TASK BAR", bgColor: "purple"})
console.log(setBtnStyle)
  const handleShow = () => {
    if(show){
      setBtnStyle({
        name : "SHOW ADD TASK BAR",
        bgColor: "purple"
      })
    }else{
      setBtnStyle({
        name : "CLOSE ADD TASK BAR",
        bgColor: "red"
      })
    }
    setShow(!show)
    console.log(show);
  }

  return <header>
    <h1>TASK TRACKER</h1>
    <button onClick={handleShow} className="btn">{btnStyle.name}</button>
   {show && <AddTaskForm tasks={tasks} setTasks={setTasks}/>}
  </header>;
};

export default Header;

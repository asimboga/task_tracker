import React from 'react';
import Header from '../components/Header';
import {showTasks} from "../components/ShowTasks";
import { useState } from 'react';
import data from "../helper/starterData"
const Home = () => {

  const [tasks, setTasks] = useState(data)

  console.log(tasks);


  return <div>
    <Header tasks={tasks} setTasks={setTasks}/>
    <showTasks/>
  </div>;
};

export default Home; 

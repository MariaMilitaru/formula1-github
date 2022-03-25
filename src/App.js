import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { mockData } from './mockData';
import {useState} from 'react';
import DriverCard from './DriverCard';


function App() {
  const [data,setData] = useState(mockData);
  const handleIncreaseScore = (index) => {
      let newDriver = {...data[index]};
      newDriver.points += 5;
      setData([...data.slice(0,index), newDriver, ...data.slice(index+1,data.length)]);
  }

  const handleDecreaseScore = (index) => {
    let newDriver = {...data[index]};
    newDriver.points -= 5;
    setData([...data.slice(0,index), newDriver, ...data.slice(index+1,data.length)]);
}

  return (
    <div className="container container d-flex align-content-around flex-wrap">
        {data.map((driver,idx) => (
            <DriverCard key={driver.number} driver={driver} idx={idx} handleIncreaseScore={handleIncreaseScore} handleDecreaseScore={handleDecreaseScore}/>
        ))}
            <DriverCard isTeam/>
    </div>
  )
}

export default App;

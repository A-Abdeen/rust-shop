import React from "react";
import "../App.css";
import styles from "../styles.js";
import cars from "../cars.js";

const CarYard = () => {
const carYard = cars.map((car) =>  (
  <div key={car.id}>
    <img style={styles.carImg} alt={car.name} src={car.image} />
    <p style={styles.text}>{car.name}</p>
    <p style={styles.text}>{car.price} USD</p>
  </div>
));
return <div style={styles.list}>{carYard}</div>;
}

export default CarYard;
    
    // return (
    //   <div style={styles.list}>
    //     <img
    //       style={styles.carImg}
    //       alt={car.name}
    //       src={car.image}
    //       ></img>
        
    //     <p>{car.price} USD</p>
    //   </div>

// const carYard = cars.map((car) => {
//   return;
//   <Car x={car} />;
// });
      

//   });
// };

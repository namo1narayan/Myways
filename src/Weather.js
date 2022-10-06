import React from "react";
import "./App.css";
import { forecast } from "./Weatherdata";
// import { Container,Row,Button,Col } from 'react-bootstrap';

export const Weather = () => {
  return (
    <>
      <HomePageHeader />
      <div className="weather-container">
        {forecast.map((data, key) => {
          return (
            <div key={key}>
              <Weathers
                key={key}
                code={data.code}
                date={data.date}
                day={data.day}
                high={data.high}
                low={data.low}
                text={data.text}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>New York City,NY,United State</h2>
    </header>
  );
};


const Weathers = ({ code,date,day,high,low,text }) => {
    if (!code) return <div />;
    return (
        <table>
        <tbody>
          <tr>
            {/* <td>
              <h5>{code}</h5>
            </td> */}
            <td>
              <h5>{date}</h5>
            </td>
            <td>
              <h4>{day}</h4>
            </td>
            <td>
              <p>{high}</p>
            </td>
            <td>
              <p>{low}</p>
            </td>
            <td>
              <p>{text}</p>
            </td>
          </tr>
        </tbody>
      </table>

      
    );

};

// function Weathers() {
//     return (
//         <Container>
//         <Container>
//           <h1 >
//             21<br></br>  <strong className="white">Clear </strong>
//           </h1>
//           <p style={{ color: "white" }}>
//             Day30  .Night20
//           </p>
//       </Container>
//       <Button variant="primary"  target="_blank">
//         </Button>
//     </Container>
     
    
//   );
// }
  
  export default Weather;
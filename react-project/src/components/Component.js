import { useState, useEffect } from 'react';

const Component = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        // fetch("http://localhost:8080/api/pets", { mode: "cors" })
        fetch("http://34.219.17.114:8080/api/pets", { mode: "cors" })
          .then((result) => {
            // console.log(result.json());
            // setData(result);
            return result.json();
          })
          .then((result) => {
            console.log(result);
            setData(result);
          })
          .catch((error) => console.log(error));
    }, [])

    return (
        <div>
            {data.map((el, i) => {
                return <p key={i}>{el.pet_name}</p>
            })}
        </div>
    );
}

export default Component;
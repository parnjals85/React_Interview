import { useEffect , useState } from "react";
function usecurrencyInfo(currency){
    const [data , setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=> setData(res[currency]))
        // Agr currency - INR res['inr'] milega-> uske
        // andar saare conversion rates 
        // fir SetData() wo Object ko state me store kar deta hai
    },[currency])// Jab bhi currency chnage hogi , Use Effect dubara chalega
    console.log(data);
    return data;

}

export default usecurrencyInfo;

// Yeh ek custom hook hai jo API se currency conversion data fetch karta hai.

// useState se data store hota hai.

// useEffect API request only tab chalata hai jab currency change hoti hai.

// Response se res[currency] extract karke state me rakhta hai.

// Aur same object return karta hai component ko.
const fetchData =async (userCity) => {
    try {
        const data  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=34a67814b4b379a052688597831470d8&units=metric`);
        const json = await data.json();
        if(json.cod === "404"){
            return {status: false, data: json};
        }
        return {status: true, data: json};
    }catch(error){
        return {status: false, data: error};
    }
}
export default fetchData;
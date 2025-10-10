import { createContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {

    const [serverData, setServerData] = useState([]);

    function getServerData() {
        axios
            .get("http://localhost:3000")
            .then((response) => {
                setServerData(response.data)
            })
            .catch((error) => console.log(error))
            .finally("Data fetch completed")
    }


    useEffect(() => { getServerData() }, [])
    return (<GlobalContext.Provider value={{ serverData }}>
        {children}
    </GlobalContext.Provider>)


};

export { GlobalContext, GlobalProvider };


import { createContext } from "react";

import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [course_list,setCourseList] = useState([])

    const url = "http://localhost:4000"
    const [token,setToken]=useState("")
    
    // Fetch course list on component mount
    const fetchCourseList = async () => {
        const response = await axios.get(url + "/api/course/list")
        setCourseList(response.data.data)
        
        
    }
    
    // Fetch course list on component mount
    useEffect(() => {
        
        async function loadData() { 
            // Load data here
            await fetchCourseList()
        }
        loadData()
    }, [])
    useEffect(() => { 
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }
    })
    const contextValue = {
        // Define your store data here
        course_list,
        url,
        token,
        setToken
        // Add other store data if needed
        


    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
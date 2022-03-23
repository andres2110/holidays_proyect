import React from "react";
import { chageFavorite } from "../redux/actions/holidays";
import { useDispatch } from "react-redux";

export default function Holiday(props){
    const [isFavorite,setFavorite] = React.useState(props.isFavorite)
    const styles ={
        backgroundColor: "#92DCCD",
        color: "white"
    }

    const fnDispatch = useDispatch()
    //FUNCTIONS
    function handle(){
        setFavorite((prev)=>!prev)
        fnDispatch(chageFavorite(props.id))
    }
    return(
        <div className="holiday-card"  
             style={!isFavorite ? styles:{}} 
             onClick={handle}>
            <h3>{props.name}</h3>
            <h4 className="holiday--date">{props.date}</h4>
        </div>
    )
}
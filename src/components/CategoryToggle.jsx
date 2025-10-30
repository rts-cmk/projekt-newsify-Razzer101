import { useEffect, useState } from "react";

export default function CategoryToggle({ category , onDragStart, onDragOver, onDrop}){

    const [btnToggle, setBtnToggle] = useState("start")
    const [btnToggleColor, setBtnToggleColor] = useState("#4D861F")

    const handleToggle = () => {
        if(localStorage.getItem(`${category}Display`)){
            localStorage.removeItem(`${category}Display`);
            setBtnToggle("start")
            setBtnToggleColor("#4D861F")
        } else{
            localStorage.setItem(`${category}Display`, "disabled");
            setBtnToggle("end")
            setBtnToggleColor("#c4c4c4")
        }
    }

    useEffect(() => {
        if(localStorage.getItem(`${category}Display`)){
            setBtnToggle("end")
            setBtnToggleColor("#c4c4c4")
        } else{
            setBtnToggle("start")
            setBtnToggleColor("#4D861F")
        }
    },[])

    return(
        <div 
            className="settings-category"
            draggable 
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            <img className="settings-category__img" src="newsifyLogo.png" alt="Newsify logo" />
            <h4 className="settings-category__h4">{category}</h4>
            <button onClick={() => handleToggle()} className="Setting-toggle" style={{justifyContent: btnToggle, backgroundColor: btnToggleColor}}>
                <div className="Setting-toggle__div"></div>
            </button>
        </div>
    )
}
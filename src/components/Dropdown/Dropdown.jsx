import { useState } from "react"
import { DropdownStyled } from "./DropdownStyled.jsx" 
import { useNavigate } from "react-router-dom"

const Dropdown = ({updateBtnEvent, deleteBtnEvent, deleteBtnOn, logoutBtnOn}) => {
  const [ isActive, setIsActive ] = useState(false)
  const navigate = useNavigate()

  const toggleIsActive = () => {
    setIsActive(!isActive)
  }
  
    return (
      <DropdownStyled id="dropdown" $on={isActive} onClick={toggleIsActive}>
        <button className="optionsBtn">
          {  isActive 
            ? <i className="bi bi-x" style={{fontSize: "40px"}}></i>
            : <i className="bi bi-three-dots"></i>
          }
        </button>
        { isActive && 
          <>
            <button className="updateBtn" onClick={updateBtnEvent}>
             <i className="bi bi-pencil-fill"></i>
            </button>
            {
              deleteBtnOn && 
                <button className="deleteBtn" onClick={deleteBtnEvent}>
                   <i className="bi bi-trash-fill"></i>
                </button>
            }
            {
              logoutBtnOn && 
                <button className="logoutBtn" onClick={() => navigate("/logout")}>
                   <i className="bi bi-box-arrow-right"></i>
                </button>
            }
            
          </> 
        }
      </DropdownStyled>
    )
}

export { Dropdown }
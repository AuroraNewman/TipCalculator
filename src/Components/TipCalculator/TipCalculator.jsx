import { useState } from "react";
import "./TipCalculator.css"

const TipCalculator = () => {
  const [billDollarsInput, setBillDollarsInput] = useState("$0");
  const [tipPercentInput, setTipPercentInput] = useState("15%");
  const [numberOfPeopleInput, setNumberOfPeopleInput] = useState("1");
  const [tipDollars, setTipDollars] = useState(0)
  const [billTotal, setBillTotal] = useState(0)
  const [isValidBill, setIsValidBill] = useState(true)
  const [isValidTip, setIsValidTip] = useState(true)
  const [isValidNumberOfPeople, setIsValidNumberOfPeople] = useState(true)
  
    function isValidInput(numStr, unitType) {
        if (unitType === 'dollars' && numStr.match(/^\$.+/)) numStr = numStr.replace("$", "")
        if (unitType === 'percent' && numStr.match(/.+%$/)) numStr = numStr.replace("%", "")
        if (unitType === 'integer') return !numStr.match(/^0\d/g) && /^[1-9]\d*$/.test(numStr) && parseInt(numStr) >=1
        return (
            !numStr.match(/^0\d/g) && numStr !== "" && !isNaN(numStr) && parseInt(numStr) >= 0
        )
    }
 
    function handleBillDollarsChange(e) {
        const input = e.target.value.replaceAll("$", "")
    
        setIsValidBill(isValidInput(input, "dollars"))
        setBillDollarsInput(`$${input}`)
    }

    function handleTipPercentChange(e) {
        const input = e.target.value.replaceAll("%", "")
    
        setIsValidTip(isValidInput(input, "percent"))
        setTipPercentInput(input)
    }

    function handleNumberOfPeopleChange(e) {
        const input = e.target.value
    
        setIsValidNumberOfPeople(isValidInput(input, "integer"))
        setNumberOfPeopleInput(input)
    }

    function handleTipPercentageDecrement(){
        if (/^0|^0%/.test(tipPercentInput)) return;
        const newInput = `${parseFloat(tipPercentInput || '0') - 1}%`;
        setIsValidTip(isValidInput(newInput, "percent"))
        setTipPercentInput(newInput)
    }

    function handleTipPercentageIncrement(){
        const newInput = `${parseFloat(tipPercentInput || '0') + 1}%`;
        setIsValidTip(isValidInput(newInput, "percent"))
        setTipPercentInput(newInput)
    }
  
    function handleNumberPeopleDecrement(){
        if (/^0|^0%/.test(tipPercentInput)) return;
        const newInput = `${parseInt(numberOfPeopleInput || '0') - 1}%`;
        setIsValidNumberOfPeople(isValidInput(newInput, "integer"))
        setNumberOfPeopleInput(newInput)
    }

    function handleNumberPeopleIncrement(){
        const newInput = `${parseInt(numberOfPeopleInput || '0') + 1}%`;
        setIsValidTip(isValidInput(newInput, "integer"))
        setTipPercentInput(newInput)
    }


  return (
    <form className = "tip-calculator" onSubmit={() => null}>
      <div className = "section">
        <div className = "form-group">
          <label>Bill</label>
          <div className = 'counter'>
            <input
              onClick={handleBillDollarsChange}
              value = {billDollarsInput}
              type = "text"
              placeholder = "Enter your bill"
              className={isValidBill ? "" : 'error'}
              />
          </div>
        </div>
        <div className = "form-group">
          <label>Tip Percent</label>
          <div className = "counter">
            <button type ="button" onClick={handleTipPercentageDecrement} disabled = {false}>
              -
            </button>
            <input
              onClick={handleTipPercentChange}
              value = {tipPercentInput}
              type = 'text'
              placeholder = "Enter your bill"
              className={isValidBill ? "": 'error'}
              />
            <button type ="button" onClick={handleTipPercentageIncrement}>
              +
            </button>
          </div>
        </div>
        <div className = "form-group">
          <label>Number of People</label>
          <div className = 'counter'>
            <button type ="button" onClick={handleNumberPeopleDecrement} disabled = {false}>
              -
            </button>
            <input
              onClick={handleNumberOfPeopleChange}
              value = {numberOfPeopleInput}
              type = "text"
              placeholder = "Number of people splitting the bill"
              className={isValidNumberOfPeople  ? "": "error"}
              />
            <button type ="button"
              onClick={handleNumberPeopleIncrement}>
              +
            </button>
          </div>            
        </div>
      </div>    
    <div className = 'section'>
      <div className = 'result-container'>
        <div className = 'header-and-result'>
          <p>Tip:</p>
          <p>-</p>
        </div>
        <p className = 'per-person'>person</p>
      </div>
      <div className = 'result-container'>
        <div className = 'header-and-result'>
          <p>Total:</p>
          <p>-</p>
        </div>
        <p className = 'per-person'>person</p>
      </div>
    
    </div>
    
    </form>
  )
}
export default TipCalculator;
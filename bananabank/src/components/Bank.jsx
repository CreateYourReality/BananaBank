import { useState } from "react";
import "./Bank.css"
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Input from "./Input";
import Header from "./Header";

const Bank = () => {
    const [amount,setAmount] = useState(0)
    function getInput(){return document.getElementById("input")}

    return (  
        <>
            <Header/>
            <section>
                <div className="konto">
                    <h2 className="saldo">{amount}</h2>
                </div>
            <Input/>
            <div>
                <Deposit amount={amount} setAmount={setAmount} input={getInput}/>
                <Withdraw amount={amount} setAmount={setAmount} input={getInput}/>
            </div>
            </section>
        </>
    );
}
 
export default Bank;
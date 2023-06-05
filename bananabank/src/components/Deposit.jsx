import "./Deposit.css"



const Deposit = (probs) => {
    return (  
        <button className="einzahlen" onClick={() => {
            probs.setAmount(probs.amount + Number(probs.input().value))
            }
        }>EINZAHLEN</button>
    );
}
 
export default Deposit;
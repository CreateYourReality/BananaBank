import "./Deposit.css"



const Deposit = (probs) => {
    return (  
        <button className="einzahlen" onClick={probs.event}>EINZAHLEN</button>
    );
}
 
export default Deposit;
import "./Withdraw.css"

const Withdraw = (probs) => {
    return (  
        <button className="auszahlen" onClick={() => {
            probs.setAmount(probs.amount - Number(probs.input().value))
            }
        }>AUSZAHLEN</button>    );
}
 
export default Withdraw;
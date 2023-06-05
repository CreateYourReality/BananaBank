import "./Withdraw.css"

const Withdraw = (probs) => {
    return (  
            <button className="auszahlen" onClick={probs.event}>AUSZAHLEN</button>
    );
}
 
export default Withdraw;
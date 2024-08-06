type StepsProps = {
    stepActive: number;
}

function Steps({ stepActive}: StepsProps) {
    return (
        <div className="steps">
            <div className="steps__elem">
                <div className={`steps__elem--all ${stepActive===1? "steps__active": ""}`}>
                    <p>1</p>
                </div>
                <div className="steps__desktop">
                    <p>Step 1</p>
                    <p className="step__desktop--option">YOUR INFO</p>
                </div>
            </div>
            <div className="steps__elem">
                <div className={`steps__elem--all ${stepActive===2? "steps__active": ""}`}>
                    <p>2</p>
                </div>
                <div className="steps__desktop">
                    <p>Step 2</p>
                    <p className="step__desktop--option">SELECT PLAN</p>
                </div>
            </div>
            <div className="steps__elem">
                <div className={`steps__elem--all ${stepActive===3? "steps__active": ""}`}>
                    <p>3</p>
                </div>
                <div className="steps__desktop">
                    <p>Step 3</p>
                    <p className="step__desktop--option">ADD-ONS</p>
                </div>
            </div>
            <div className="steps__elem">
                <div className={`steps__elem--all ${stepActive===4 || stepActive===5 ? "steps__active": ""}`}>
                    <p>4</p>
                </div>
                <div className="steps__desktop">
                    <p>Step 4</p>
                    <p className="step__desktop--option">SUMMARY</p>
                </div>
            </div>
        </div>
    );
}

export default Steps;
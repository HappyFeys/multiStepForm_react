type StepsProps = {
    stepActive: number;
}

function Steps({ stepActive}: StepsProps) {
    return (
        <div className="steps">
            <div>
                <div className={stepActive===1? "steps__active": ""}>
                    <p>1</p>
                </div>
                <div className="steps__desktop">
                    <p>Step 1</p>
                    <p>YOUR INFO</p>
                </div>
            </div>
            <div>
                <div className={stepActive===2? "steps__active": ""}>
                    <p>2</p>
                </div>
                <div className="steps__desktop">
                    <p>Step 2</p>
                    <p>SELECT PLAN</p>
                </div>
            </div>
            <div>
                <div className={stepActive===3? "steps__active": ""}>
                    <p>3</p>
                </div>
                <div className="steps__desktop">
                    <p>Step 3</p>
                    <p>ADD-ONS</p>
                </div>
            </div>
            <div>
                <div className={stepActive===4? "steps__active": ""}>
                    <p>4</p>
                </div>
                <div className="steps__desktop">
                    <p>Step 4</p>
                    <p>SUMMARY</p>
                </div>
            </div>
        </div>
    );
}

export default Steps;
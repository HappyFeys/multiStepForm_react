type ButtonNextProps = {
    handleNext: () => void
    display:string;
}
function ButtonNext({handleNext, display} : ButtonNextProps) {
    return (
        <button className={`button--next ${display}`} onClick={handleNext}>
            Next Step
        </button>
    );
}

export default ButtonNext;
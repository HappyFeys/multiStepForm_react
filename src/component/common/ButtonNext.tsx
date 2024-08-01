type ButtonNextProps = {
    handleNext: () => void
}
function ButtonNext({handleNext} : ButtonNextProps) {
    return (
        <button className="button--next" onClick={handleNext}>
            Next Step
        </button>
    );
}

export default ButtonNext;
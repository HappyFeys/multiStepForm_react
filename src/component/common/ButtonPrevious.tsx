type ButtonPreviousProps = {
    handlePrevious: () => void;
    display: string;
}
function ButtonPrevious({handlePrevious, display} : ButtonPreviousProps) {
    return (
        <button className={`button--previous ${display}`} onClick={handlePrevious}>
            Go Back
        </button>
    );
}

export default ButtonPrevious;
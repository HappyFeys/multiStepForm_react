type ButtonPreviousProps = {
    handlePrevious: () => void;
}
function ButtonPrevious({handlePrevious} : ButtonPreviousProps) {
    return (
        <button className="button--previous" onClick={handlePrevious}>
            Go Back
        </button>
    );
}

export default ButtonPrevious;
type ButtonNextProps = {
    handleNext: () => void
    display:string;
    children: React.ReactNode
}
function ButtonNext({handleNext, display, children} : ButtonNextProps) {
    return (
        <button className={`button--next ${display}`} onClick={handleNext}>
            {children}
        </button>
    );
}

export default ButtonNext;
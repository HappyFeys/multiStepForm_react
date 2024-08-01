import { ResumeProps } from "../../types/stepType";

function StepFour({ resume, setStep } : ResumeProps) {

    

    return (
        <div>
           <div>
                <h2>Finishing up</h2>
                <p>Double-check everything looks OK before confirming.</p>
           </div>
           <div>
            <div>
                <div>
                    <p>{`${resume.plan.name} (${resume.monthly ? "Monthly" : "Yearly"})`}</p>
                    <p onClick={() => setStep!(2)}>Change</p>
                </div>
                    <p>{`$${resume.plan.price}/${resume.monthly ? "mo" : "yr"}`}</p>
            </div>
            <div>
                {resume.addons.map((addon, index) => (
                    <div key={index}>
                        <div>
                            <p>{addon.name}</p>
                        </div>
                        <p>{`$${addon.price}/${resume.monthly ? "mo" : "yr"}`}</p>
                    </div>
                ))}
            </div>
            <div>
                <p>Total (per {resume.monthly ? "month" : "year"})</p>
                <p>{`$${resume.plan.price + resume.addons.reduce((acc, addon) => acc + addon.price, 0)}/${resume.monthly ? "mo" : "yr"}`}</p>
            </div>
           </div>
        </div>
    );
}

export default StepFour;
import { ResumeProps } from "../../types/stepType";

function StepFour({ resume, setStep } : ResumeProps) {

    

    return (
        <div className="main stepFour">
           <div>
                <h2>Finishing up</h2>
                <p>Double-check everything looks OK before confirming.</p>
           </div>
           <div className="checkout">
            <div className="checkout__description">
                <div className="checkout__description--plan">
                    <div>
                        <p>{`${resume.plan.name.charAt(0).toUpperCase() + resume.plan.name.slice(1)} (${resume. monthly ? "Monthly" : "Yearly"})`}</p>
                        <p className="change" onClick={() => setStep!(2)}>Change</p>
                    </div>
                        <p>{`$${resume.plan.price}/${resume.monthly ? "mo" : "yr"}`}</p>
                </div>
                <hr />
                <div className="checkout__description--addon">
                    {resume.addons.map((addon, index) => (
                        <div key={index} className="checkout__description--addon--elem">
                            <div>
                                <p>{addon.name}</p>
                            </div>
                            <p className="price">{`+$${addon.price}/${resume.  monthly ? "mo" : "yr"}`}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="checkout__total">
                <p>Total (per {resume.monthly ? "month" : "year"})</p>
                <p className="price">{`+$${resume.plan.price + resume.addons.reduce((acc, addon) => acc + addon.price, 0)}/${resume.monthly ? "mo" : "yr"}`}</p>
            </div>
           </div>
        </div>
    );
}

export default StepFour;
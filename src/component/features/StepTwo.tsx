import { useState } from "react";
import { StepProps } from "../../types/stepType";

type PlanName = "arcade" | "advanced" | "pro";

function StepTwo({ onDataChange }: StepProps) {
    const [monthly, setMonthly] = useState(true);
    const [planChoice, setPlanChoice] = useState<PlanName | null>(null);

    const planPrices: Record<PlanName, { monthly: number, yearly: number }> = {
        arcade: { monthly: 9, yearly: 90 },
        advanced: { monthly: 12, yearly: 120 },
        pro: { monthly: 15, yearly: 150 }
    };

    const handleChange = () => {
        setMonthly(prevMonthly => {
            const newMonthly = !prevMonthly;
            onDataChange("monthly", newMonthly);

            if (planChoice) {
                const price = newMonthly ? planPrices[planChoice].monthly : planPrices[planChoice].yearly;
                setTimeout(()=>onDataChange("plan", { name: planChoice, price: price })),0;
            }

            return newMonthly;
        });
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const plan = e.currentTarget.dataset.plan as PlanName;
        if (plan) {
            setPlanChoice(plan);
            const price = monthly ? planPrices[plan].monthly : planPrices[plan].yearly;
            setTimeout(()=>onDataChange("plan", { name: plan, price: price })),0;
        }
    };

    return (
        <div className="main stepTwo">
            <div>
                <h2>Select your plan</h2>
                <p>You have the option of monthly or yearly billing</p>
            </div>
            <div className="plan">
                <div onClick={handleClick} data-plan="arcade"       className={`plan--choice ${planChoice === "arcade"? "plan--choice--active": ""}`}>
                    <img src="./../../src/assets/img/icon-arcade.svg" alt="Arcade" />
                <div className="plan--choice--description">
                    <h3>Arcade</h3>
                    <p>{monthly ? "$9/mo" : "$90/yr"}</p>
                    <p className="free">{!monthly ? "2 months free" : ""}</p>
                </div>
            </div>
            <div onClick={handleClick} data-plan="advanced" className={`plan--choice ${planChoice === "advanced"? "plan--choice--active": ""}`}>
                <img src="./../../src/assets/img/icon-advanced.svg" alt="Advanced" />
                <div className="plan--choice--description">
                    <h3>Advanced</h3>
                    <p>{monthly ? "$12/mo" : "$120/yr"}</p>
                    <p className="free">{!monthly ? "2 months free" : ""}</p>
                </div>
            </div>
            <div onClick={handleClick} data-plan="pro" className={`plan--choice ${planChoice === "pro"? "plan--choice--active": ""}`}>
                <img src="./../../src/assets/img/icon-pro.svg" alt="Pro" />
                <div className="plan--choice--description">
                    <h3>Pro</h3>
                    <p>{monthly ? "$15/mo" : "$150/yr"}</p>
                    <p className="free">{!monthly ? "2 months free" : ""}</p>
                </div>
            </div>
            <div className="plan__choice">
                <label htmlFor="planChoice" className={monthly ? "monthlyActive" : ""}>Monthly</label>
                <input type="checkbox" name="planChoice" id="planChoice" onChange={handleChange} className="checkbox"/>
                <label htmlFor="planChoice" className={!monthly ? "monthlyActive" : ""}>Yearly</label>
            </div>
            </div>
        </div>
    );
}

export default StepTwo;

import {  useState } from "react";
import { StepProps } from "../../types/stepType";

type PlanName = "arcade" | "advanced" | "pro";

function StepTwo({onDataChange} : StepProps ) {
    const [monthly, setMonthly] = useState(true);

    const handleChange = () => {
        setMonthly(!monthly);
        onDataChange("monthly", !monthly)
    }

    const planPrices : Record<PlanName, { monthly: number, yearly: number }> = {
        arcade: { monthly: 9, yearly: 90 },
        advanced: { monthly: 12, yearly:120 },
        pro: { monthly: 15, yearly: 150 }
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const plan = e.currentTarget.dataset.plan as PlanName;

        if (plan) {
            const price = monthly ? planPrices[plan].monthly : planPrices[plan].yearly;
            onDataChange("plan", { name: plan, price: price });
        }
    }

    

    return (
        <div>
            <div>
                <h2>Select your plan</h2>
                <p>You have the option of monthly or yearly billing</p>
            </div>
            <div onClick={handleClick} data-plan="arcade">
                <img src="./../../assets/img/icon-arcade.svg" alt="Arcade" />
                <div>
                    <h3>Arcade</h3>
                    <p>{monthly ? "$9/mo" : "$90/yr"}</p>
                </div>
            </div>
            <div onClick={handleClick} data-plan="advanced" >
                <img src="./../../assets/img/icon-advanced.svg" alt="Advanced" />
                <div>
                    <h3>Advanced</h3>
                    <p>{monthly? "$12/mo" : "$120/yr"}</p>
                </div>
            </div>
            <div onClick={handleClick} data-plan="pro">
                <img src="./../../assets/img/icon-pro.svg" alt="Pro" />
                <div>
                    <h3>Pro</h3>
                    <p>{monthly? "$15/mo" : "$150/yr"}</p>
                </div>
            </div>
            <div>
                <label htmlFor="planChoice" className={monthly? "monthlyActive": ""}>Monthly</label>
                <input type="checkbox" name="planChoice" id="planChoice" onChange={handleChange}/>
                <label htmlFor="planChoice" className={monthly? "monthlyActive": ""}>Yearly</label>
            </div>
        </div>
    );
}

export default StepTwo;
import { useState } from "react";
import { StepProps } from "../../types/stepType";

function StepThree({onDataChange, monthly} : StepProps ) {

    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const addon = e.currentTarget.dataset.addon;

        if (addon) {
            setSelectedAddons((prevAddons) => {
                let updatedAddons;
                if (prevAddons.includes(addon)) {
                    updatedAddons = prevAddons.filter(a => a !== addon);
                } else {
                    updatedAddons = [...prevAddons, addon];
                }
                onDataChange("addons", updatedAddons);
                return updatedAddons;
            });
        }
    };

    return (
        <div>
            <div>
                <h2>Pick add-ons</h2>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div onClick={handleClick} data-addon="online">
                <input type="checkbox" name="addon" id="online" />
                <div>
                    <p>Online service</p>
                    <p>Access to multiplayer games</p>
                </div>
                <p>{monthly ? "$1/mo" : "$10/yr"}</p>
            </div>
            <div onClick={handleClick} data-addon="storage">
                <input type="checkbox" name="addon" id="storage" />
                <div>
                    <p>Larger storage</p>
                    <p>Extra 1TB of cloud save</p>
                </div>
                <p>{monthly ? "$2/mo" : "$20/yr"}</p>
            </div>
            <div onClick={handleClick} data-addon="profile">
                <input type="checkbox" name="addon" id="custoProfile" />
                <div>
                    <p>Customizable profile</p>
                    <p>Custom theme on your profile</p>
                </div>
                <p>{monthly ? "$2/mo" : "$20/yr"}</p>
            </div>
        </div>
    );
}

export default StepThree;
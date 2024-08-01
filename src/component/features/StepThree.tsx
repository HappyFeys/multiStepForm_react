import { useState } from "react";
import { StepProps } from "../../types/stepType";

type AddonName = "online" | "storage" | "profile";

function StepThree({onDataChange, monthly} : StepProps ) {

    const [selectedAddons, setSelectedAddons] = useState<{name: AddonName, price: number}[]>([]);
    
    const addonPrice : Record<AddonName, {monthly: number, yearly: number }> = {
       online : { monthly: 1, yearly: 10 },
       storage : { monthly: 2, yearly: 20 },
       profile : { monthly: 2, yearly: 20 }, 
    }


    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const addon = e.currentTarget.dataset.addon as AddonName;

        if (addon) {
            const price = monthly ? addonPrice[addon].monthly : addonPrice[addon].yearly;
            setSelectedAddons((prevAddons)=>{
                const updatedAddons = prevAddons.some(a => a.name === addon) ? prevAddons.filter(a => a.name !== addon) : [...prevAddons, {name: addon, price: price}];
                setTimeout(() => onDataChange("addons", updatedAddons)), 0;
                return updatedAddons
            })
        }
    };

    return (
        <div className="main stepThree">
            <div>
                <h2>Pick add-ons</h2>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="addon">
                <div onClick={handleClick} data-addon="online" className="addon--choice" >
                    <input type="checkbox" name="addon"     id="online" />
                    <div>
                        <h4>Online service</h4>
                        <p>Access to multiplayer games</p>
                    </div>
                    <p className="addon--price">{monthly ? "+$1/mo" : "+$10/yr"}</p>
                </div>
                <div onClick={handleClick} data-addon="storage" className="addon--choice">
                    <input type="checkbox" name="addon"     id="storage" />
                    <div>
                        <h4>Larger storage</h4>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <p className="addon--price">{monthly ? "+$2/mo" : "+$20/yr"}</p>
                </div>
                <div onClick={handleClick} data-addon="profile" className="addon--choice">
                    <input type="checkbox" name="addon"     id="custoProfile" />
                    <div>
                        <h4>Customizable profile</h4>
                        <p>Custom theme on your profile</p>
                    </div>
                    <p className="addon--price">{monthly ? "+$2/mo" : "+$20/yr"}</p>
                </div>
            </div>
        </div>
    );
}

export default StepThree;
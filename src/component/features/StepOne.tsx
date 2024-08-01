import { StepProps } from "../../types/stepType";


function StepOne({onDataChange} : StepProps) {
    
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        onDataChange(id, value);
    }
    

    return (
        <div>
            <div>
                <h2>Personoal info</h2>
                <p>Please provide your name, email adress, and phone number</p>
            </div>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="e.g. Stephen King" onChange={handleChange} id="name" name="name"/>
                </div>
                <div>
                    <label htmlFor="email">Email Adress</label>
                    <input type="text" placeholder="e.g. stephenking@lorem.com" onChange={handleChange} id="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" placeholder="e.g. +1 234 567 890" onChange={handleChange} id="phone" name="phone"/>
                </div>
            </div>
        </div>
    );
}

export default StepOne;
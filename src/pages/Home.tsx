import { useState } from "react";
import Steps from "../component/layout/Header/Steps";
import Footer from "../component/layout/Footer/Footer";
import ButtonNext from "../component/common/ButtonNext";
import ButtonPrevious from "../component/common/ButtonPrevious";
import StepOne from "../component/features/StepOne";
import StepTwo from "../component/features/StepTwo";
import StepThree from "../component/features/StepThree";
import StepFour from "../component/features/StepFour";
import Thanks from "../component/features/thanks";


function Home() {
    const [step, setStep] = useState(1);
    const [information, setInformation] = useState({
        name: '',
        email: '',
        phone: '',
        plan:{
            name: '',
            price: 0,
        },
        monthly:true,
        addons: [
            {
                name: '',
                price: 0
            }
        ],
    });

    const renderStep = (step : number) : JSX.Element => {
        switch (step) {
            case 1:
                return <StepOne onDataChange={(key : string, data : string | boolean | string[]) => setInformation({...information, [key]: data})}/>
            case 2:
                return <StepTwo onDataChange={(key : string, data : string | boolean | string[]) => setInformation({...information, [key]: data})}/>
            case 3:
                return <StepThree onDataChange={(key : string, data : string | boolean | string[]) => setInformation({...information, [key]: data})} monthly={information.monthly}/>
            case 4:
                return <StepFour resume={information} setStep={(newStep : number) => setStep(newStep)}/>     
            default:
                return <Thanks resume={information}/>
        }
    }


    return (
        <div className="home">
            <Steps stepActive={step} />
            {renderStep(step)}
            <div className="home__button">
                <ButtonPrevious handlePrevious={() => setStep(step - 1)} />
                <ButtonNext handleNext={() => setStep(step + 1)} />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
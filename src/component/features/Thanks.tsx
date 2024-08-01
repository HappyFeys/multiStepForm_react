import { ResumeProps } from "../../types/stepType";

function Thanks({resume} : ResumeProps) {
    return (
        <div>
            <img src="./../../assets/img/icon-thank-you.svg" alt="Thanks" />
            <h2>Thank you {resume.name}!</h2>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    );
}

export default Thanks;
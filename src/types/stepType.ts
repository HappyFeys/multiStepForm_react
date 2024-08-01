export type StepProps = {
    onDataChange: (key: string, data : any ) => void;
    monthly? : boolean
}

export type ResumeProps = {
    resume : {
        name : string,
        email : string,
        phone : string,
        plan : {
            name : string,
            price : number,
        },
        monthly : boolean,
        addons : {
            name : string,
            price : number
        }[],
    },
    setStep? : (number : number) => void
}
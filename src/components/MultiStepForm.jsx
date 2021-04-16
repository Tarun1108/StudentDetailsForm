import React from 'react';
import {useForm, useStep} from 'react-hooks-helper';
import {BasicDetails } from './stepForm/Names';
import ProjectDetails from './stepForm/Contact';
import Address from './stepForm/Address';
import Review from './stepForm/Review';
import Submit from './stepForm/Submit';

const defaultData ={
    firstName:"",
    lastName:"",
    dateOfBirth:"",
   matrialStatus:"",
   address:"",
   country:"",
   state:"",
   city:"",
   zip:"",
   projectName:"",
   description:"",
};

const steps=[
    {id:'basicdetails '},
    {id:'address'},
    {id:'projectdetails'},
    {id:'review'},
    {id:'submit'},
    
]

const MultiStepForm = () => {
    const [formData, setForm]= useForm(defaultData);
    const { step, navigation} = useStep({
        steps,
        initialStep:0,
    });
   
    const props={formData, setForm, navigation} 

    switch(step.id){
        case "basicdetails ": return <BasicDetails   {...props} />;
        case "address": return <Address {...props}/>;
        case "projectdetails":return <ProjectDetails  {...props}/>;
        case "review": return <Review  {...props}/>;
        case "submit": return <Submit  {...props}/>; 
    }

    return (
        <div>
            <h1>Student Form</h1>
        </div>
    )
}

export default MultiStepForm

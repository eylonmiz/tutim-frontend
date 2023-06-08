import React, { FC } from 'react'
import { TutimWizard } from "@tutim/fields";

const configRegister = {
    fields: [
        {
            key: "fullname",
            label: "Full Name",
            type: "text",
            isRequired: true
        },
        {
            key: "email",
            label: "Email",
            type: "text",
            isRequired: true
        },
        { key: "date", label: "Birthday", type: "date" },
        {
            key: "password",
            label: "Password",
            type: "password",
            isRequired: true
        },
        {
            key: "phone",
            label: "Phone",
            type: "number",
            isRequired: true
        },
    ],
};

const Register: FC<{ setFlag: (flag: boolean) => void }> = ({ setFlag }) => {

    const handleSubmit = (info: any) => {
        localStorage.setItem('userInfo', JSON.stringify(info.data));
        localStorage.setItem('login', String(true));
        window.location.reload();
    }

    return (
        <div>
            <section id="registerOrLogin" className='text-center font-bold text-4xl'>
                Register
            </section>
            <a onClick={() => setFlag(false)} className="font-medium text-black hover:text-blue-500 items-center justify-center flex cursor-pointer">
                Already have an account?
            </a>
            <TutimWizard onSubmit={(info) => handleSubmit(info)} config={configRegister} />
        </div>
    )
}


export default Register;
import React, { FC } from 'react'
import { TutimWizard } from "@tutim/fields";

const configLogin = {
    fields: [
        {
            key: "email",
            label: "Email",
            type: "text",
            isRequired: true
        },
        {
            key: "password",
            label: "Password",
            type: "password",
            isRequired: true
        },
    ],
};


const Login: FC<{ setFlag: (flag: boolean) => void }> = ({ setFlag }) => {

    const handleSubmit = (info: any) => {
        const userInfo = JSON.parse(String(localStorage.getItem('userInfo')));

        if (userInfo.email === info.email && userInfo.password === info.password) {
            localStorage.setItem('login', String(true));
            window.location.reload();
        } else {
            alert('Invalid email or password')
        }

    }

    return (
        <div>
            <div id="registerOrLogin" className='text-center font-bold text-4xl'>
                Login
            </div>
            <a onClick={() => setFlag(true)} className="font-medium text-black hover:text-blue-500 items-center justify-center flex cursor-pointer">
                Don't have an account yet?
            </a>
            <TutimWizard onSubmit={(info) => handleSubmit(info.data)} config={configLogin} />
        </div>
    )
}

export default Login;
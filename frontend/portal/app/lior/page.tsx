"use client"

import React from 'react'
import Image from 'next/image';
import { TutimWizard, defaultFields } from "@tutim/fields";
import { FormProvider } from "@tutim/headless";
import ArrowDown from './images/arrow-down.gif'

import { AvatarDemo } from './components/AvatarDemo'
import { MainNav } from "@/app/lior/components/main-nav"
import { Search } from "@/app/lior/components/search"
import TeamSwitcher from "@/app/lior/components/team-switcher"
import { UserNav } from "@/app/lior/components/user-nav"

import MusicPage from '@/app/lior/components/Music/MusicPage'

// The form's schema
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

export default function page() {
    return (
        <FormProvider fieldComponents={defaultFields}>
            <div className="border-b">
                <div className="flex h-16 items-center px-4 bg-gray-100">
                    <UserNav />
                    <MainNav className="mx-6" />
                    <div className="ml-auto flex items-center space-x-4">
                        <Search />
                    </div>
                </div>
            </div>


            <div className='text-6xl font-bold text-center mt-7 mb-7'>
                Flow of the app structure
            </div>
            <div className='w-3/4 mx-auto border border-cream p-4 rounded mt-3'>
                <div className='text-xl font-bold text-center'>
                    1. Register or Login
                </div>
                <div className='flex items-center justify-center'>
                    <div className='w-2/3 m-4 border border-cream p-4 rounded'>
                        <div id="registerOrLogin" className='text-center font-bold'>
                            Register
                        </div>
                        <TutimWizard onSubmit={console.log} config={configRegister} />
                    </div>
                    <div className='w-2/3 m-4 border border-cream p-4 rounded'>
                        <div id="registerOrLogin" className='text-center font-bold'>
                            Login
                        </div>
                        <TutimWizard onSubmit={console.log} config={configLogin} />
                    </div>
                </div>
            </div>
            <Image src={ArrowDown} alt="my gif" height={300} width={300} className='mx-auto mt-7 mb-7' />
            <div className='w-3/4 mx-auto border border-cream p-4 rounded mb-7'>
                <div id="home" className='text-xl font-bold text-center mt-2'>
                    2. Home Page
                </div>
                <div className='items-center justify-center flex mt-4'>
                    <AvatarDemo />
                </div>
                <div className='text-3xl font-bold text-center mt-3'>
                    Lior Atiya
                </div>

                <MusicPage />
            </div>
        </FormProvider>
    )
}

"use client"

import React, { useState } from 'react'
import { defaultFields } from "@tutim/fields";
import { FormProvider } from "@tutim/headless";

import { MainNav } from "@/app/lior/components/Navbar/main-nav"
import { Search } from "@/app/lior/components/Navbar/search"
import { UserNav } from "@/app/lior/components/Navbar/user-nav"

import Register from '@/app/lior/components/Register'
import Login from '@/app/lior/components/Login'

import MusicPage from '@/app/lior/music/MusicPage'

export default function page() {

    const [registered, setRegistered] = useState(false)
    const login = localStorage.getItem('login');

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

            {
                login === 'true' ?
                    <MusicPage />
                    :
                    <div className='w-2/6 mx-auto border border-cream p-4 rounded mt-3'>
                        <div className='flex items-center justify-center'>
                            {
                                registered ?
                                    <Register setFlag={setRegistered} />
                                    :
                                    <Login setFlag={setRegistered} />
                            }
                        </div>
                    </div>
            }

        </FormProvider>
    )
}

'use client'
import React, { useState } from 'react';
import PageColor from '../components/pageColor';
import { AvatarDemo } from '../components/avatar';
import App from '../tutimWizard';
import { UserAuthForm } from '../components/signIn';
import { Button } from "@/components/ui/button"
import { NavigationMenuDemo } from '../components/navBar';
import MusicPage from '../../examples/music/page';

function Home() {
  const [color, setColor] = useState('Purple');


  const [showAuthForm, setShowAuthForm] = useState(false);

  const handleSignIn = () => {
    setShowAuthForm((prevShowAuthForm) => !prevShowAuthForm);
  };

      return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', padding: '16px' }}>
          <AvatarDemo />
          <NavigationMenuDemo />
          
          <Button onClick={handleSignIn}><i className="fa fa-search">Sign In</i></Button>
        </div>
        <div style={{ flexGrow: 1 }}>
          {showAuthForm && <UserAuthForm />}
          <MusicPage />
        </div>
      </div>
  );
}
  

export default Home;
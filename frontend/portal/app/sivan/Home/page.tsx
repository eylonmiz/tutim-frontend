'use client'
import React, { useState } from 'react';
import PageColor from '../components/pageColor';
import { AvatarDemo } from '../components/avatar';
import { UserAuthForm } from '../components/signIn';
import { Button } from "@/components/ui/button"
import { NavigationMenuDemo } from '../components/navBar';
import MusicPage from '../../examples/music/page';


function Home() {
  
  const [pageColor, setPageColor] = useState('Purple');
  const [showAuthForm, setShowAuthForm] = useState(false);

  const handleSignIn = () => {
    setShowAuthForm((prevShowAuthForm) => !prevShowAuthForm);
  };

  const handleColorChange = (color: string) => {
    setPageColor(color);
  };


  const divStyle = {
    backgroundColor: pageColor,
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
  };

      return (
        <div style={divStyle}>
        <div style={{ display: 'flex', alignItems: 'baseline', padding: '16px' }}>
          <AvatarDemo />
          <NavigationMenuDemo onColorChange={handleColorChange} />
          
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
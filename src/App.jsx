import React from 'react';
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from '@clerk/clerk-react';
import Admins from './Admin';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Admin Dashboard</h1>
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button>Sign in</button>
            </SignInButton>
          </SignedOut>
        </div>
      </header>

      <main>
        <SignedIn>
          <Admins />
        </SignedIn>
        <SignedOut>
          <p>Please sign in to view admin data.</p>
        </SignedOut>
      </main>
    </div>
  );
}

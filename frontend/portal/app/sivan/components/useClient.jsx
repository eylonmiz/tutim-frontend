import { useClient } from 'react-server-dom-webpack';

export default function ParentComponent() {
  // Mark the parent component as a Client Component
  useClient();

  return (
    // Render your component hierarchy here
    <pageColor />
  );
}
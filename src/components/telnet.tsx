import React, { useState } from 'react';

function MapAscii() {
  const [telnetResult, setTelnetResult] = useState('');

  const handleTelnetRequest = async () => {
    try {
      const response = await fetch('/api/telnet');
      const data = await response.json();
      setTelnetResult(data.result);
    } catch (error) {
      console.error('Telnet request failed:', error);
      setTelnetResult('Telnet request failed');
    }
  };

  return (
    <div>
      <h1>Mapascii</h1>
      <button onClick={handleTelnetRequest}>Execute Telnet MapAscii Command</button>
      <pre>{telnetResult}</pre>
    </div>
  );
}

export default MapAscii;

// pages/api/telnet.js

import { exec } from 'child_process';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    exec('telnet mapscii.me', (error, stdout, stderr) => {
      if (error) {
        console.error(`Telnet error: ${error.message}`);
        res.status(500).json({ error: 'Telnet error' });
        return;
      }
      if (stderr) {
        console.error(`Telnet stderr: ${stderr}`);
        res.status(500).json({ error: 'Telnet stderr' });
        return;
      }
      res.status(200).json({ result: stdout });
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

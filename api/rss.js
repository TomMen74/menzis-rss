// RSS Proxy Server für Menzis RSS
// Deploybar auf Vercel, Render, Railway, etc.

export default async function handler(req, res) {
  const { url } = req.query;
  
  if (!url) {
    return res.status(400).json({ error: 'Missing url parameter' });
  }
  
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'MenzisRSS/1.0',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*'
      }
    });
    
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch feed' });
    }
    
    const xml = await response.text();
    
    // RSS als JSON zurückgeben
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    
    // XML als Response zurückgeben - App parst selbst
    res.status(200).json({ xml });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Use dynamic import for @vercel/blob to avoid build issues
let blobModule;

async function getBlob() {
  if (!blobModule) {
    blobModule = await import('@vercel/blob');
  }
  return blobModule;
}

// CORS headers for local development and production
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  // Handle OPTIONS for CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Set CORS headers for all responses
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const BLOB_KEY = 'reviews.json';

  try {
    // Check if Blob is configured
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.warn('BLOB_READ_WRITE_TOKEN not configured');

      if (req.method === 'GET') {
        return res.status(200).json({ data: {} });
      }

      return res.status(503).json({
        error: 'Vercel Blob not configured. Please enable Blob storage in your Vercel dashboard.',
        data: {}
      });
    }

    const { put, list } = await getBlob();

    if (req.method === 'GET') {
      // Get all reviews
      try {
        // List blobs to find our reviews file
        const { blobs } = await list({ prefix: 'reviews' });
        const reviewsBlob = blobs.find(b => b.pathname === BLOB_KEY);

        if (reviewsBlob) {
          // Fetch the blob content
          const response = await fetch(reviewsBlob.url);
          const data = await response.json();
          return res.status(200).json({ data });
        } else {
          // Blob doesn't exist yet, return empty object
          return res.status(200).json({ data: {} });
        }
      } catch (error) {
        console.error('GET error:', error);
        // If blob doesn't exist, return empty object
        return res.status(200).json({ data: {} });
      }
    }

    if (req.method === 'POST') {
      // Save reviews
      const reviewData = req.body;

      // Upload to Vercel Blob
      const blob = await put(BLOB_KEY, JSON.stringify(reviewData, null, 2), {
        access: 'public',
        contentType: 'application/json',
        addRandomSuffix: false,
        allowOverwrite: true,
      });

      return res.status(200).json({
        success: true,
        url: blob.url
      });
    }

    return res.status(405).json({
      error: 'Method not allowed'
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      error: error.message
    });
  }
}

// Export config for Vercel
export const config = {
  api: {
    bodyParser: true,
  },
};

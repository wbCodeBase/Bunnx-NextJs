/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '**',
        },
      ],
    },
    staticPageGenerationTimeout: 1000,
  
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: `
                default-src 'self';
                script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com;
                style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com;
                font-src 'self' https://fonts.gstatic.com;
                img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https:;
                connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://your-api-domain.com;
                frame-ancestors 'none';
                object-src 'none';
                base-uri 'self';
              `.replace(/\s{2,}/g, ' ').trim(),
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  






// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: '**',
//                 port: '',
//                 pathname: '**',
//             },
//         ],
//     },
//     staticPageGenerationTimeout: 1000, // Moved this setting into nextConfig
// };



// export default nextConfig;

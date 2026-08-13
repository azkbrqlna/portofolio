/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Wajib jika menggunakan next/image pada static export
    },
    trailingSlash: true, // Membantu navigasi rute di cPanel/Apache (misal: /contact/)
};

export default nextConfig;

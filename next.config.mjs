/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The $99 Swing Evaluation was retired Oct 2026; send old links to Lessons.
      { source: "/lessons/evaluation", destination: "/lessons", permanent: true },
    ];
  },
};
export default nextConfig;

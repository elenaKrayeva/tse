
/** @type {import('next').NextConfig} */
const isGH = process.env.NEXT_PUBLIC_DEPLOY_TARGET === 'gh';


const repo = 'tse';           
const username = 'elenaKrayeva'; // твой GitHub логин (только для assetPrefix ниже)

export default {
  output: 'export',              
  images: { unoptimized: true }, 
  basePath: isGH ? `/${repo}` : undefined,
  assetPrefix: isGH ? `/${repo}/` : undefined, 
  trailingSlash: true,
};

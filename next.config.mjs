/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["placehold.co"]
    },
    // disable css-modules component styling
    webpack(config) {
        config.module.rules.forEach((rule) => {
            const { oneOf } = rule;
            if (oneOf) {
                oneOf.forEach((one) => {
                    if (!`${one.issuer?.and}`.includes('_app')) return;
                    one.issuer.and = [path.resolve(__dirname)];
                });
            }
        })
        return config;
    },
};

export default nextConfig;

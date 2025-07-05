import Button from './common/Button';

const logos = [
    {
        src: '/logos/whatsapp.svg',
        alt: 'WhatsApp',
        className: 'top-0 left-1/2 -translate-x-1/2',
    },
    {
        src: '/logos/salesforce.svg',
        alt: 'Salesforce',
        className: 'top-1/4 right-0 -translate-y-1/2',
    },
    {
        src: '/logos/chart.svg',
        alt: 'Chart',
        className: 'top-1/4 left-0 -translate-y-1/2',
    },
    {
        src: '/logos/zapier.svg',
        alt: 'Zapier',
        className: 'bottom-1/4 left-0 translate-y-1/2',
    },
    {
        src: '/logos/razorpay.svg',
        alt: 'Razorpay',
        className: 'bottom-0 left-1/2 -translate-x-1/2',
    },
    {
        src: '/logos/integration.svg',
        alt: 'Integration',
        className: 'bottom-1/4 right-0 translate-y-1/2',
    },
];

const IntegrationOrbit: React.FC = () => {
    return (
        <div className="relative w-full min-h-[600px] bg-gradient-to-br from-[#1b004c] to-[#2b0d7d] rounded-3xl flex items-center justify-center overflow-hidden px-4">
            <div className="absolute w-[500px] h-[500px] border border-purple-600/20 rounded-full" />
            <div className="absolute w-[350px] h-[350px] border border-purple-600/20 rounded-full" />
            <div className="absolute w-[200px] h-[200px] border border-purple-600/20 rounded-full" />

            <div className="relative z-10 text-center text-white max-w-md">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                    Plays Well With Everything
                </h2>
                <p className="text-sm sm:text-base text-purple-200 mb-6">
                    Connect Test to your CRM, payment gateway, email service, or
                    analytics stack in minutes — with built-in integrations and
                    support for custom APIs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="gradient" />
                </div>
            </div>
        </div>
    );
};

export default IntegrationOrbit;

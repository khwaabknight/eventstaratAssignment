import Button from './common/Button';
import OrbitingIcons from './common/OrbitingIcons';
import whatsapp from '../assets/icons/WhatsApp.png';
import razorpay from '../assets/icons/Razorpay.png';
import adsense from '../assets/icons/adsense.png';

import salesforce from '../assets/icons/salesforce.png';
import zoho from '../assets/icons/Zoho.png';
import zapier from '../assets/icons/zapier.png';

interface OrbitingIcon {
    icon: string;
    delay: number;
}

const orbitingIcons1: OrbitingIcon[] = [
    { icon: zoho, delay: 0 },
    { icon: zapier, delay: 3 },
    { icon: salesforce, delay: 6 },
];
const orbitingIcons2: OrbitingIcon[] = [
    { icon: whatsapp, delay: 1 },
    { icon: razorpay, delay: 4 },
    { icon: adsense, delay: 7 },
];
const IntegrationOrbit = () => {
    return (
        <div className="relative w-full min-h-[600px] bg-gradient-to-br from-[#1b004c] to-[#2b0d7d] rounded-3xl flex items-center justify-center overflow-hidden px-4">
            <div className="absolute w-[500px] h-[500px] border border-purple-600/20 rounded-full hidden md:block" />
            <div className="absolute w-[350px] h-[350px] border border-purple-600/20 rounded-full" />
            <div className="absolute w-[200px] h-[200px] border border-purple-600/20 rounded-full" />

            <OrbitingIcons
                sizeClassNames="w-[350px] h-[350px] lg:w-[500px] lg:h-[500px]"
                orbitingIcons={orbitingIcons1}
            >
                <OrbitingIcons
                    sizeClassNames="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]"
                    orbitingIcons={orbitingIcons2}
                    reverse
                >
                    <div className="relative z-10 text-center text-white max-w-md">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                            Plays Well With Everything
                        </h2>
                        <p className="text-sm sm:text-base text-purple-200 mb-6">
                            Connect Test to your CRM, payment gateway, email
                            service, or analytics stack in minutes — with
                            built-in integrations and support for custom APIs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="gradient" />
                        </div>
                    </div>
                </OrbitingIcons>
            </OrbitingIcons>
        </div>
    );
};

export default IntegrationOrbit;

import { FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import footerUser1 from '../assets/images/footerUser1.png';
import footerUser2 from '../assets/images/footerUser2.png';
import footerUser3 from '../assets/images/footerUser3.png';
import footerBg from '../assets/images/Frame 1321314953.png';
import Button from './common/Button';

const footerLinkGroups = [
    {
        title: 'By Event Type',
        links: [
            'Exhibitions & Expos',
            'Conferences & Conclaves',
            'Enterprise Events',
        ],
    },
    {
        title: 'By Stakeholder',
        links: ['For Organizers', 'For Exhibitors', 'For Attendees'],
    },
    {
        title: 'By Organization Type',
        links: ['Government', 'Corporates & Startups', 'Education', 'PrivLi'],
    },
    {
        title: 'By Phase',
        links: ['Pre Event', 'Live Event', 'Post-Event'],
    },
];

function Footer() {
    return (
        <footer
            className={` relative text-white bg-primary overflow-hidden rounded-t-3xl font-ruberoid mt-10`}
        >
            <div
                className=" relative px-6 py-10 lg:py-16 bg-no-repeat bg-cover bg-center rounded-t-3xl"
                style={{ backgroundImage: `url(${footerBg})` }}
            >
                <div className="w-full lg:w-10/12 mx-auto flex flex-col lg:justify-between gap-10">
                    <div className="w-full flex flex-col lg:flex-row justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-semibold">
                                Join Our Newsletter Today.
                            </h3>
                            <p className="text-lg text-gray-300 mb-3">
                                Get Instant Updates
                            </p>
                            <div className="flex flex-col lg:flex-row lg:items-center gap-4 mt-4 mb-6">
                                <div className="flex -space-x-3">
                                    <img
                                        src={footerUser3}
                                        className="w-12 lg:w-16 h-12 lg:h-16 rounded-full border-4 border-white bg-[#DCCEFC]"
                                    />
                                    <img
                                        src={footerUser2}
                                        className="w-12 lg:w-16 h-12 lg:h-16 rounded-full border-4 border-white bg-[#FFE184]"
                                    />
                                    <img
                                        src={footerUser1}
                                        className="w-12 lg:w-16 h-12 lg:h-16 rounded-full border-4 border-white bg-[#08BC8D]"
                                    />
                                </div>
                                <span className="text-base text-gray-300">
                                    200+ users subscribed to newsletter
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:px-2 py-1 w-full lg:max-w-sm">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="text-sm text-black w-full outline-none placeholder-[#767676] bg-white px-7 py-4 flex items-center justify-center gap-2 rounded-4xl"
                            />
                            <Button text="Subscribe" variant="gradient" />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 w-full justify-between text-sm">
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 w-full lg:w-1/5 ">
                            <a
                                href="#"
                                className="font-semibold text-2xl leading-12"
                            >
                                Platform
                            </a>
                            <a
                                href="#"
                                className="font-semibold text-2xl leading-12"
                            >
                                Intelligence
                            </a>
                            <a
                                href="#"
                                className="font-semibold text-2xl leading-12"
                            >
                                Showcase
                            </a>
                            <a
                                href="#"
                                className="font-semibold text-2xl leading-12"
                            >
                                Resources
                            </a>
                            <a
                                href="#"
                                className="font-semibold text-2xl leading-12"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="font-semibold text-2xl leading-12"
                            >
                                Book a demo
                            </a>
                        </div>

                        <div className="w-full lg:w-4/5">
                            <h4 className="font-semibold text-white mb-8">
                                Solutions:
                            </h4>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 w-full">
                                {footerLinkGroups.map((group, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-2"
                                    >
                                        <p className="text-white text-lg font-medium leading-8 mb-2 lg:mb-5">
                                            {group.title}
                                        </p>
                                        <ul className="flex flex-col gap-4">
                                            {group.links.map(
                                                (link, linkIndex) => (
                                                    <li key={linkIndex}>
                                                        <a
                                                            href="#"
                                                            className="hover:underline text-gray-300 font-normal text-base leading-8"
                                                        >
                                                            {link}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2 w-full lg:w-5/7 justify-between">
                            <p>
                                2118 Thornridge Cir.
                                <br />
                                Syracuse, Connecticut <br />
                                35624
                            </p>
                            <p>
                                2118 Thornridge Cir.
                                <br />
                                Syracuse, Connecticut <br />
                                35624
                            </p>
                            <p>Hello@test.com</p>
                            <p>(201) 555 012</p>
                        </div>
                        <div className="flex lg:justify-end gap-3 mt-2 w-full lg:w-2/7">
                            <div className="flex gap-3">
                                <Button
                                    variant="gradient"
                                    text={<FaInstagram className="w-7 h-7" />}
                                    className="w-16 h-16 !p-1 aspect-square rounded-full"
                                />
                                <Button
                                    variant="gradient"
                                    text={<FaYoutube className="w-7 h-7" />}
                                    className="w-16 h-16 !p-1 aspect-square rounded-full"
                                />
                                <Button
                                    variant="gradient"
                                    text={<FaGithub className="w-7 h-7" />}
                                    className="w-16 h-16 !p-1 aspect-square rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

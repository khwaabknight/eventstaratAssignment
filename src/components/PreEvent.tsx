import { useState } from 'react';
import imgPre from '../assets/images/Event1.png';
import imgLive from '../assets/images/Event2.png';
import imgPost from '../assets/images/Event3.png';

const EventSection = () => {
    const [displayedTab, setDisplayedTab] = useState(0);

    const allTabs = [
        { image: imgPre, title: 'Pre-Event' },
        { image: imgLive, title: 'Live Event' },
        { image: imgPost, title: 'Post-Event' },
    ];
    return (
        <section className="w-full lg:w-10/12 mx-auto px-4 lg:p-10 mt-10 flex flex-col lg:flex-row gap-5 items-center justify-start font-ruberoid lg:h-[600px] mb-20">
            {/* Main Image */}
            <div className="h-full ">
                <img
                    src={allTabs[displayedTab].image}
                    alt="Main Event"
                    className="w-auto h-full rounded-3xl object-cover"
                />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-between">
                <div className="pl-3 lg:pl-5">
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                        {allTabs[displayedTab].title}
                    </h2>
                    <p className="text-gray-700 mb-6 text-sm lg:text-base max-w-lg pr-10">
                        From invite to intent, this is where momentum builds.
                        Test uses AI to personalize invitations, segment
                        audiences, automate communication, and recommend the
                        best time to engage — setting every stakeholder up for
                        success before the event even begins.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 overflow-x-auto w-full">
                    {allTabs.map((tab, index) => (
                        <Tab
                            key={index}
                            image={tab.image}
                            title={tab.title}
                            index={index + 1}
                            active={displayedTab === index}
                            onClick={() => setDisplayedTab(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

type TabProps = {
    image: string;
    title: string;
    index: number;
    active?: boolean;
    onClick?: () => void;
};

const Tab = ({ image, title, index, active = false, onClick }: TabProps) => {
    return (
        <div
            className={`flex flex-col items-center justify-center w-full rounded-2xl overflow-hidden px-3 lg:px-5 `}
            onClick={onClick}
        >
            <img
                src={image}
                alt={title}
                className={`rounded-xl object-cover ${
                    active ? 'bg-purple-500 p-2.5' : 'bg-transparent'
                } `}
            />
            <div className="w-full flex flex-col lg:flex-row justify-between mt-3">
                <span className="text-sm lg:text-base font-semibold text-black/40">
                    {index.toString().padStart(2, '0')}
                </span>
                <span className="text-xs lg:text-lg font-semibold text-black">
                    {title}
                </span>
            </div>
        </div>
    );
};

export default EventSection;

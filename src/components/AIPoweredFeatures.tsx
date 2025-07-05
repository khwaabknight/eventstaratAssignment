import RowHeadingAndDescription from './common/RowHeadingAndDescription';
import { aiFeatures, tools, type AiFeature } from '../constants/aiFeatures';
import AiFeatureCard from './common/AiFeatureCard';

function AIPoweredFeatures() {
    return (
        <section className="flex flex-col lg:items-start lg:justify-between w-10/12 mx-auto gap-6 font-ruberoid my-20">
            <RowHeadingAndDescription
                heading="Smarter, Not harder"
                subheading="AI-Powered Features"
                description="Test built-in AI drives personalized matchmaking, smart RSVP nudges, schedule suggestions, and engagement recommendations — with no manual input required."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-16">
                {aiFeatures.map((feature: AiFeature) => (
                    <AiFeatureCard
                        key={feature.title}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                    />
                ))}
            </div>
            <div className="hidden md:grid grid-cols-2 md:grid-cols-8 lg:grid-cols-10 gap-x-4 gap-y-6 text-sm text-gray-800 mt-3">
                {tools.map((tool, i) => (
                    <p key={i} className="p-3 text-center">
                        {tool}
                    </p>
                ))}
            </div>

            {/* Mobile Message */}
            <div className="w-full text-center text-lg font-semibold text-gray-800 mt-4">
                ...And 100+ More
            </div>
        </section>
    );
}

export default AIPoweredFeatures;

import type { AiFeature } from '../../constants/aiFeatures';

const AiFeatureCard = ({ icon, title, description }: AiFeature) => {
    return (
        <div className="px-8 py-10 rounded-2xl bg-[#F6F6F6] transition">
            <div className="text-3xl mb-6 w-12 h-12">
                <img src={icon} alt={title} />
            </div>
            <h4 className="font-semibold text-2xl text-black">{title}</h4>
            <p className="text-black font-normal text-lg leading-8 mt-8 w-9/10">
                {description}
            </p>
        </div>
    );
};

export default AiFeatureCard;

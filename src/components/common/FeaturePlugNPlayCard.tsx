
type Props = {
    image: string;
    title: string;
    description: string;
}

function FeaturePlugNPlayCard({ image, title, description }: Props) {
    return (
        <div className="rounded-4xl border border-[#7F7F7F] p-6 shadow-sm hover:shadow-md transition bg-white flex flex-col gap-3">
            <img
                src={image}
                alt={title}
                className="rounded-3xl mb-4 object-cover w-full aspect-[7/5]"
            />
            <h3 className="font-semibold text-2xl text-gray-900">{title}</h3>
            <p className="text-black text-sm flex-1 mt-1 w-7/10 capitalize">{description}</p>
            <button className="text-primary font-medium mt-1 hover:underline flex items-center gap-1">
                Book A Demo
                <span>↗</span>
            </button>
        </div>
    );
}

export default FeaturePlugNPlayCard;

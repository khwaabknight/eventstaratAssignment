type Props = {
    subheading?: string;
    heading: string;
    description: string;
};

function RowHeadingAndDescription({
    subheading = '',
    heading,
    description,
}: Props) {
    return (
        <div className="w-full space-y-4 flex lg:flex-row flex-col justify-between lg:items-end">
            <div className="">
                <p className="text-lg font-semibold text-[#100249] lg:mb-8">
                    {subheading}
                </p>
                <h2 className="text-3xl lg:text-5xl font-semibold text-primary">
                    {heading}
                </h2>
            </div>
            <p className="text-black text-lg lg:text-base lg:max-w-lg p-1">
                {description}
            </p>
        </div>
    );
}

export default RowHeadingAndDescription;

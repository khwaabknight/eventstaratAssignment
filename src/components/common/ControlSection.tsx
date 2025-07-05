import Button from './Button';

type Props = {
    type: string;
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
};
const ControlSection = ({
    type,
    title,
    description,
    image,
    reverse = false,
}: Props) => {
    return (
        <div
            className={`flex flex-col-reverse md:flex-row items-center justify-between gap-16 pr-5 font-ruberoid w-full ${
                reverse ? 'lg:flex-row-reverse' : ''
            }`}
        >
            <div className="w-full lg:w-1/2 flex flex-col items-stretch">
                <img src={image} alt={title} className="" />
                <Button className='w-full lg:hidden py-6 mt-14 !text-lg'/>
            </div>
            <div className="w-full flex flex-col gap-1 lg:w-1/2 text-left">
                <p className="text-lg font-semibold text-secondary mb-2">
                    {type}
                </p>
                <h2 className="text-4xl font-semibold text-primary mb-4 lg:w-3/5 leading-12">
                    {title}
                </h2>
                <p className="text-black text-base font-normal lg:w-4/5">{description}</p>
                <div className='hidden lg:block mt-6'>
                    <Button />
                </div>
            </div>
        </div>
    );
};

export default ControlSection;

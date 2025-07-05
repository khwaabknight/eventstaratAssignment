import bgPattern from '../assets/images/PreFooterBg.png';
import Button from './common/Button';

function PreFooter() {
    return (
        <section
            className="w-[95%] mx-auto rounded-xl p-8 lg:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center text-white font-ruberoid"
            style={{
                backgroundImage: `url(${bgPattern})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            {/* Left Text */}
            <div className="text-left">
                <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
                    Want <br className="hidden lg:block" />A Full Tour?
                </h2>
            </div>

            {/* Right Text + Button */}
            <div className="mt-6 lg:mt-0 text-sm lg:text-base max-w-sm text-left">
                <p className="mb-4 w-4/5 lg:w-full capitalize">
                    Let us show you how Test fits into your team’s ecosystem —
                    and grows with it.
                </p>
                <Button variant="gradient" className="mt-40 lg:mt-0" />
            </div>
        </section>
    );
}

export default PreFooter;

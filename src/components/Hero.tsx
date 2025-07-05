import heroBg from '../assets/images/HeroBg.png';
import heroImg from '../assets/images/HeroImg.png';
import Button from './common/Button';

function Hero() {
    return (
        <section className="relative bg-white overflow-hidden font-ruberoid w-full">
            {/* Background Gradient/Image */}

            <div className="mx-auto px-4 pt-20 text-center">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl lg:text-[4rem] font-extrabold leading-tight text-primary capitalize">
                        One Platform. Built For The Entire Event Journey.
                    </h1>
                    <p className="mt-6 text-black text-sm sm:text-base mx-auto max-w-4xl px-5">
                        Test is your all-in-one platform for managing events of
                        any scale. From planning to execution, we empower
                        organizers, exhibitors, and attendees to create
                        memorable experiences.
                    </p>
                </div>
                <div className="mt-8">
                    <Button />
                </div>
            </div>

            {/* <img
                src={heroBg}
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 w-screen h-full object-contain z-0"
            /> */}

            {/* Foreground Image */}
            <div className="mt-5 relative w-full min-h-[500px]">
                <img
                    src={heroImg}
                    alt="Main Visual"
                    className="relative z-10 max-w-7xl mx-auto w-full h-auto object-contain"
                />
            </div>
        </section>
    );
}

export default Hero;

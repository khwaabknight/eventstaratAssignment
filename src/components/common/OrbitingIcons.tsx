import React from 'react';

interface OrbitingIcon {
    icon: string;
    delay: number;
}

const OrbitingIcons = ({
    children,
    orbitingIcons,
    sizeClassNames = 'w-[500px] h-[500px]',
    reverse = false,
}: {
    children: React.ReactNode;
    orbitingIcons: OrbitingIcon[];
    sizeClassNames?: string;
    reverse?: boolean;
}) => {
    return (
        <div className="relative w-80 h-80 mx-auto">
            {children}

            {orbitingIcons.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={`absolute top-1/2 left-1/2 ${sizeClassNames}`}
                        style={{
                            animation: `${
                                reverse ? 'counter-rotate' : 'rotate'
                            } 12s linear infinite`,
                            animationDelay: `${item.delay * 1.5}s`,
                        }}
                    >
                        <div
                            className="absolute top-0 left-1/2 w-20 h-20 !p-3 bg-white/10 border-white/50 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200"
                            style={{
                                transform: 'translate(-50%, -50%)',
                                animation: `${
                                    reverse ? 'rotate' : 'counter-rotate'
                                } 12s linear infinite`,
                                animationDelay: `${item.delay * 1.5}s`,
                            }}
                        >
                            <img
                                src={item.icon}
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                );
            })}

            {/* Keyframe Animations */}
            <style>{`
                @keyframes rotate {
                    from {
                        transform: translate(-50%, -50%) rotate(0deg);
                    }
                    to {
                        transform: translate(-50%, -50%) rotate(360deg);
                    }
                }

                @keyframes counter-rotate {
                    from {
                        transform: translate(-50%, -50%) rotate(0deg);
                    }
                    to {
                        transform: translate(-50%, -50%) rotate(-360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default OrbitingIcons;

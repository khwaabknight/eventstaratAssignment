function Button({ variant = 'primary', text = 'Book A Demo', className = '' }) {
    if (variant === 'gradient') {
        return (
            <button
                className={`px-7 py-4 flex items-center justify-center gap-2 rounded-4xl relative text-white font-medium border-t-[2px] border-l-[2px] border-[#1D1D1D]/20 w-full lg:w-auto  ${className} `}
                style={{
                    background: `linear-gradient(135deg, #66666600 0%, #66666666 100%)`,
                    boxShadow: `
                          inset 0 0 22px rgba(242, 242, 242, 0.5),
                          inset 2px 2px 1px -2px #B3B3B3,
                          inset -12px -12px 6px -14px #B3B3B3,
                          inset 16px 16px 9px -18px rgba(255, 255, 255, 0.5)
                        `,
                }}
            >
                {text}
            </button>
        );
    }
    return (
        <button className="inline-block bg-primary text-white px-6 py-4 rounded-full text-sm font-medium hover:bg-primary/90 transition">
            {text}
        </button>
    );
}

export default Button;

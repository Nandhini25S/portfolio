export default function StarField() {
    const stars = Array.from({ length: 90 }, (_, i) => {
        const isDiamond = Math.random() > 0.7;
        return {
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: isDiamond ? Math.random() * 3 + 3 : Math.random() * 1.5 + 0.5,
            delay: Math.random() * 6,
            duration: 2.5 + Math.random() * 4,
            isDiamond,
        };
    });

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {stars.map((star) => (
                <span
                    key={star.id}
                    className={`absolute bg-white animate-twinkle ${star.isDiamond ? "star-diamond" : "rounded-full"
                        }`}
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`,
                    }}
                />
            ))}
        </div>
    );
}

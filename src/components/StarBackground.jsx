import { useEffect, useState} from "react";

//id , size, x, y , opacity, animationDuration 
//id , size, x, y , delay, animationDuration 


export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() =>{
        generateStars()
        generateMeteros()

    const handleResize = () => {
        generateStars();
    };

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener("resize", handleResize )
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) /10000
        );

        const newStars = []

        for (let i = 0; i < numberOfStars; i++){
            newStars.push({ //pushing to the new stars array
                id:i,
                size: Math.random() * 3 + 1, //size btwn 1 -4 pixels 
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5, //some stars are faint some are not
                animationDuration: Math.random() * 4 + 2, //duration btwn 2 and 6 seconds 
            })
        }

        setStars(newStars);
    }

    const generateMeteros = () => {
        const numberOfMeteors = 10;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++){
            newMeteors.push({ //pushing to the new stars array
                id:i,
                size: Math.random() * 2 + 1, //size btwn 1 -4 pixels 
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * 15, //some stars are faint some are not
                animationDuration: Math.random() * 3 + 3, //duration btwn 2 and 6 seconds 
            })
        }

        setMeteors(newMeteors);
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
            {stars.map((star) => (
                <div 
                    key={star.id} 
                    className="star animate-pulse-subtle" 
                    style={{
                    width: star.size + "px",
                    height: star.size + "px" ,
                    left: star.x + "%" ,
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s" ,
                }} 
                />
            ))}

            {meteors.map((meteor) => (
                <div 
                    key={meteor.id} 
                    className="meteor animate-meteor" 
                    style={{
                    width: meteor.size + "px",
                    height: meteor.size + "px" ,
                    left: meteor.x + "%" ,
                    top: meteor.y + "%",
                    delay: meteor.delay,
                    animationDuration: meteor.animationDuration + "s" ,
                }} 
                />
            ))}
        </div>
    );
};
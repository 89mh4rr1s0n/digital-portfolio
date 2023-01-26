import { useState, useRef, useEffect } from "react";
import ExperienceCard from './ExperienceCard'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { useWindowSize } from '../utils/utils'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
    experiences: Experience[]
}

export default function WorkExperience({ experiences }: Props) {

    let scrl = useRef<any>(null);
    const [scrollX, setscrollX] = useState<number>(0);
    const [scrolEnd, setscrolEnd] = useState<boolean>(false);
    const [width, height] = useWindowSize()

    const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const scrollLeft = (element: { scrollLeft: any; }, change: number, duration: number) => {
        var start = element.scrollLeft,
            currentTime = 0,
            increment = 20;

        const animateScroll = () => {
            currentTime += increment;
            let val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollLeft = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    useEffect(() => {
        //Check width of the scollings
        if (
            scrl.current &&
            scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
        return () => { };
    }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='relative h-screen max-h-screen flex overflow-hidden flex-col text-left max-w-full
        justify-evenly mx-auto items-center'>
            <h3 className='pt-12 uppercase tracking-[15px] text-gray-400'>
                Experience
            </h3>

            {/* scroll left button/ */}
            {scrollX !== 0 && (
                <button className="absolute top-1/2 left-0 h-24 w-10 rounded-r-md z-50 text-white bg-theme-blue 
              shadow-lg" onClick={() => scrollLeft(scrl.current, -width * 0.45, 300)}>
                    <ChevronLeftIcon className='h-8 w-8 bg-theme-blue' />
                </button>
            )}

            {/* items */}
            <div className='w-full flex overflow-x-scroll space-x-6 p-10 
            scrollbar-track-gray-500/50 scrollbar-thumb-theme-blue scrollbar-thin mx-20'
                ref={scrl} onScroll={scrollCheck}>
                {experiences.map((exp) => (
                    <ExperienceCard key={exp._id} experience={exp} />
                ))}
            </div>


            {/* scroll right button */}
            {!scrolEnd && (
                <button className="absolute right-0 top-1/2 h-24 w-12 text-white z-50 bg-theme-blue 
            shadow-lg rounded-l-md" onClick={() => scrollLeft(scrl.current, width * 0.45, 300)}>
                    <ChevronRightIcon className='h-8 w-8 bg-theme-blue' />
                </button>
            )}

        </motion.div>
    )
}
import { useState, useRef, useEffect } from "react";
import { useWindowSize } from '../utils/utils'
import { Project as ProjectType } from '../typings'
import Project from './Project'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
    projects: ProjectType[]
}

export default function Projects({ projects }: Props) {

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
            scrl.current.offsetWidth + 1
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
        <div className='h-screen relative flex flex-col overflow-hidden justify-evenly mx-auto'>
            <h3 className='pt-12 uppercase tracking-[15px] text-gray-400 w-screen text-center'>
                Projects
            </h3>

            {/* scroll left button/ */}
            {scrollX !== 0 && (
                <button className="absolute top-1/3 left-0 h-24 w-10 rounded-r-md z-50 text-white bg-theme-blue 
              shadow-lg" onClick={() => scrollLeft(scrl.current, -width, 300)}>
                    <ChevronLeftIcon className='h-8 w-8 bg-theme-blue' />
                </button>
            )}

            {/* items */}
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden z-20 snap-x
            scrollbar-track-gray-500/50 scrollbar-thumb-theme-blue scrollbar-thin'
            ref={scrl} onScroll={scrollCheck}>
                {projects?.map((project, i) => (
                    <Project
                        key={project._id}
                        project={project}
                        projectNo={i + 1}
                        noOfProjects={projects.length}
                    />
                ))}
            </div>


            {/* scroll right button */}
            {!scrolEnd && (
                <button className="absolute right-0 top-1/3 h-24 w-12 text-white z-50 bg-theme-blue 
            shadow-lg rounded-l-md" onClick={() => scrollLeft(scrl.current, width, 300)}>
                    <ChevronRightIcon className='h-8 w-8 bg-theme-blue' />
                </button>
            )}


            <div className='w-full absolute top-[30%] bg-theme-blue/30 left-0 h-[500px] -skew-y-6'></div>
        </div>
    )
}
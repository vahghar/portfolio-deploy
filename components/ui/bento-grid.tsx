'use client'
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { IconCloudDemo } from "../Techstack";
import TypingAnimation from "./typing-animation";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {

    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('raghav77g@gmail.com')
        setCopied(true);
    }
    if (id === 5) {
        return (
            <div
                className={cn(
                    "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1]",
                    className
                )}
                style={{
                    background: 'rgb(4, 7, 29)',
                    backgroundColor: 'linear-gradient(90deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)'
                }}
            >
                <IconCloudDemo />
            </div>
        );
    }


    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
                className
            )}
            style={{
                background: 'rgb(4, 7, 29)',
                backgroundColor: 'linear - gradient(90deg, rgba(4, 7, 29, 1) 0 %, rgba(12, 14, 35, 1) 100 %)'
            }}
        >

            {id === 6 && (
                <BackgroundGradientAnimation>
                </BackgroundGradientAnimation>
            )}

            {/*cn stands for classname*/}
            <div className={cn(
                titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
            )}>
                <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs  lg:text-base z-10">
                    {description}
                </div>
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>

                {id === 2 && <GlobeDemo />}

                {id === 3 && (
                    <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                    </div>
                )}

                {id === 1 &&
                    <div className="flex justify-start items-center w-full">
                        <TypingAnimation text="#OpenToWork" duration={200} className="text-[2rem] text-white" />
                    </div>
                }

                {id === 6 && (
                    <div className="mt-5 relative">
                        <div className={`absolute -bottom-5 right-0`}>
                            <Lottie options={{
                                loop: copied,
                                autoplay: copied,
                                animationData: animationData,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice'
                                }
                            }} />
                        </div>

                        <MagicButton title={copied ? 'Email copied' : 'Copy my email'}
                            icon={<IoCopyOutline className="ml-2" />}
                            position="left"
                            otherClasses="bg-[#161a31] "
                            handleClick={handleCopy}
                        />
                    </div>
                )}

            </div>
        </div>
    );
};

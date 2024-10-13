import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image'

type AboutDevProps = {
    flipped?: boolean;
    image: {
        data: StaticImageData,
        alt: string,
    };
    title: string;
    name: string;
    children: React.ReactNode;
}

const AboutDev = ({ flipped, image, title, name, children }: AboutDevProps) => {
    return (
        <div className={clsx("flex flex-col gap-2 sm:gap-8 h-fit lg:justify-normal justify-center", flipped ? "sm:flex-row-reverse" : "sm:flex-row")}>
            <div className="avatar">
                <div className="h-48 rounded-2xl flex sm:aspect-square justify-end w-full">
                    <Image src={image.data} alt={image.alt} />
                </div>
            </div>
            <div className="flex flex-col justify-between lg:w-full">
                <div>
                    <h3 className="text-white/55 bg-accent rounded-md w-fit px-2">{title}</h3>
                    <h3 className="text-2xl">{name}</h3>
                </div>
                <p className="h-full lg:h-fit" id='AboutDescription'>
                    {children}
                </p>
            </div>
        </div>
    )
}

export default AboutDev
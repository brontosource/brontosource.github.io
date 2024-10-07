import Image from 'next/image'

type AboutDevProps = {
    imageURL: string;
    title: string;
    name: string;
    description: string;
}

const AboutDev = ({ imageURL, title, name, description }: AboutDevProps) => {
    return (
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 h-fit lg:justify-normal justify-center">
            <div className="avatar">
                <div className="h-48 sm:h-48 rounded-2xl flex sm:aspect-square justify-end w-full">
                    <Image src={imageURL} alt="Headshot of Andy, one of the co-founders" width={300} height={300} className='object-scale-down' />
                </div>
            </div>
            <div className="flex flex-col justify-between lg:w-full">
                <div>
                    <h3 className="text-white/55 bg-accent rounded-md w-fit px-2">{title}</h3>
                    <h3 className="text-2xl">{name}</h3>
                </div>
                <p className="text-white/85 h-full lg:h-fit">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default AboutDev
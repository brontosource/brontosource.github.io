import Image from "next/image"
import SippingDrink from "../../public/BrontoSourceSippingHotDrink.svg";

const Hero = () => {
    return (
        <section className="mx-auto w-full">
            <div className="text-center">
                <h1 className="text-4xl capitalize">Our site is under developtment</h1>
                <h2 className="text-2xl text-white/50">Please check back with us later!</h2>
            </div>
            <Image src={SippingDrink} alt={"Charlette the Bronto sipping a hot drink"} className="w-3/5 md:w-4/12 mx-auto" />
        </section>
    )
}

export default Hero
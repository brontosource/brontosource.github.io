import AboutDev from '@/components/AboutDev'
import AndyHeadshot from '../../public/andy.webp'
import MattHeadshot from '../../public/matt.webp'
const About = () => {
    const Matt = {
        name: "Matthew Kulukundis",
        title: "CEO, BrontoSource",
        image: {
            data: MattHeadshot,
            alt: "Headshot of Matt, CEO & co-founders"
        },
    }
    const Andy = {
        name: "Dr. Andrew Soffer",
        title: "CTO, BrontoSource",
        image: {
            data: AndyHeadshot,
            alt: "Headshot of Andy, CTO & co-founders"
        },
    }
    return (
        <section className="text-left h-fit" id='about'>
            <div className="max-w-3xl text-center mx-auto mb-8">
                <h2 className="text-4xl sm:text-2xl text-primary">
                    Who are we?
                </h2>
                <p>
                    Founded in September of 2024, BrontoSource is a team of energetic
                    ex-Google engineers focused on creating tools to modernize codebases
                    automatically.  Our first target is automatic migration of C/C++ to
                    idiomatic Rust for large code bases.
                </p>
            </div>
            <div className="flex flex-col my-4 h-fit gap-y-10 gap-x-4 max-w-3xl mx-auto">
                <AboutDev image={Matt.image} title={Matt.title} name={Matt.name}>
                    Matt spent the past eleven years at Google where he led the Software Ecosystems organization as a Principal Engineer. During that time he designed language and library features for migration, as well as directly planning and executing multiple migrations of previously unapproachable difficulty. Rust’s <code>std::collections::HashMap</code> is based directly on his work.
                </AboutDev>
                <AboutDev flipped image={Andy.image} title={Andy.title} name={Andy.name}>
                    Andy spent the past eight years at Google where he led the C++ Refactoring team as a Staff Engineer. During that time he designed and implemented novel technologies and techniques for source-to-source migrations across Google’s monorepo, as well as executing those migrations over hundreds of millions of lines of code.
                </AboutDev>
            </div>
        </section>
    )
}

export default About
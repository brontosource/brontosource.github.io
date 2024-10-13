import { cn } from "@/util/utils"
import clsx from "clsx"

type SectionContainerProps = {
    children: React.ReactNode
    sectionName: string
    isFullWidth?: boolean
    sectionClasses?: string
}

const SectionContainer = ({ children, sectionName, sectionClasses, isFullWidth }: SectionContainerProps) => {
    return (
        <section id={sectionName} className={cn(
            "w-full mx-4 px-0 lg:max-w-5xl",
            {
                "lg:max-w-full": isFullWidth,
            },
            sectionClasses
        )}>
            {children}
        </section>
    )
}

export default SectionContainer
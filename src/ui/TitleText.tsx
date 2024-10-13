type TitleTextProps = {
    children: React.ReactNode
}

const TitleText = ({ children }: TitleTextProps) => {
    return <h2 className="text-4xl sm:text-4xl text-base-300">{children}</h2>;
}

export default TitleText
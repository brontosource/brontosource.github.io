import Image, { StaticImageData } from "next/image"

type FeatCardProps = {
  image: {
    data: StaticImageData;
    alt: string;
  };
  title: string;
  content: string;
  showButton?: boolean;
};

const FeatCard = ({ image, title, content, showButton }: FeatCardProps) => {
    return (
      <article className="bg-base-100 h-fit shadow-xl min-h-[455px] flex flex-col">
        <figure className="bg-base-200 pl-2 pt-2 relative">
          <Image
            src={image.data}
            alt={image.alt}
            style={{
              width: "auto",
            }}
            className="bottom-0 left-0 pl-2"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">{title}</h2>
          <p className="text-primary-content/80 h-fit">{content}</p>
          {showButton && (
            <button className="btn btn-primary ">Learn More</button>
          )}
        </div>
      </article>
    );
}

export default FeatCard
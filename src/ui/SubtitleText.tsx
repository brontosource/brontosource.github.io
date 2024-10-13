type SubtitleTextPropsProps = {
  children: React.ReactNode;
};

const SubtitleText = ({ children }: SubtitleTextPropsProps) => {
  return (
    <h2 className="text-2xl sm:text-xl text-primary-content/70">{children}</h2>
  );
};

export default SubtitleText;

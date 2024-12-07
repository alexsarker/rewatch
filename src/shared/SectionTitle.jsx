const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="pb-12 text-center mx-auto">
      <h4 className="italic text-sec">{subHeading}</h4>
      <h1 className="text-3xl font-normal">{heading}</h1>
    </div>
  );
};

export default SectionTitle;

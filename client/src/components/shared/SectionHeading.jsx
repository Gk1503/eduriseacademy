const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
        {title}
      </h2>
      <div className={`w-20 h-1 bg-gradient-to-r from-primary to-secondary ${centered ? 'mx-auto' : ''} mb-4`}></div>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl ${centered ? 'mx-auto' : ''}">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

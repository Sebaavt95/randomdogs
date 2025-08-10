const Spinner = ({ size = 'md', message = null }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {/* TODO: centrar el spinner y el message */}
      <div>
        <div className="flex justify-center">
          <div
            className={`${sizeClasses[size]} rounded-full border-4 border-purple-200`}
          ></div>
          <div
            className={`${sizeClasses[size]} rounded-full border-4 border-purple-600 border-t-transparent animate-spin absolute`}
          ></div>
        </div>
        {message && (
          <p className="mt-3 text-gray-600 font-medium animate-pulse">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Spinner;

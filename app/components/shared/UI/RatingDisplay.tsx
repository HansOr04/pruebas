import React from 'react';

interface RatingDisplayProps {
  rating: number;
  showValue?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const RatingDisplay: React.FC<RatingDisplayProps> = ({
  rating,
  showValue = true,
  size = 'medium',
  className = '',
}) => {
  // Round to nearest half
  const roundedRating = Math.round(rating * 2) / 2;
  
  // Determine star size based on prop
  const starSizes = {
    small: 'w-3 h-3',
    medium: 'w-4 h-4',
    large: 'w-5 h-5',
  };
  
  const starSize = starSizes[size];
  
  // Create array of 5 stars
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      // Full star
      stars.push(
        <svg 
          key={i} 
          className={`${starSize} text-yellow-400`} 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    } else if (i - 0.5 === roundedRating) {
      // Half star
      stars.push(
        <div key={i} className="relative">
          {/* Empty star background */}
          <svg 
            className={`${starSize} text-gray-300`} 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {/* Half star overlay */}
          <div className="absolute top-0 left-0 overflow-hidden w-1/2 h-full">
            <svg 
              className={`${starSize} text-yellow-400`} 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      );
    } else {
      // Empty star
      stars.push(
        <svg 
          key={i} 
          className={`${starSize} text-gray-300`} 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
  }

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex">{stars}</div>
      {showValue && (
        <p className={`ml-1 ${size === 'large' ? 'text-base' : size === 'small' ? 'text-xs' : 'text-sm'} font-medium text-gray-700`}>
          {rating.toFixed(1)}
        </p>
      )}
    </div>
  );
};

export default RatingDisplay;
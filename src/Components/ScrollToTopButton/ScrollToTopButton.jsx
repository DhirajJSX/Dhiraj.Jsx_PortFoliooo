import { useState, useEffect, useRef } from 'react';
import './ScrollToTopButton.scss'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const hideTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
        resetHideTimeout();
      } else {
        setIsVisible(false);
      }
    };

    const handleMouseMove = () => {
      if (isVisible) {
        resetHideTimeout();
      }
    };

    const checkIfTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    const resetHideTimeout = () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 4000); // 4000ms = 4 seconds
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    checkIfTouchDevice();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [isVisible]);

  const scrollToTop = () => {
    setIsClicked(true);
    const scrollStep = -window.scrollY / (500 / 15); // Adjust the speed by changing the division factor (500)
    const scrollInterval = setInterval(() => {
      if (window.scrollY > 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
        setIsClicked(false); // Reset the button state
      }
    }, 15); // Adjust the interval time for smoother animation
  };

  return (
    <button
      className={`shadow-2xl fixed bottom-4 right-4 ${
        isHovered && !isTouchDevice ? 'bg-black text-white' : 'bg-white text-black'
      } z-10 p-3 m-3 rounded-full transition-all duration-300 ease-in-out transform ${
        isClicked ? 'hover:scale-105' : ''
      } ${
        isVisible || isHovered
          ? 'opacity-100 translate-x-0 bounce' // Add bounce class when visible
          : 'opacity-0 translate-x-full pointer-events-none'
      }`}
      onClick={scrollToTop}
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <svg
        className="w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill={isHovered && !isTouchDevice ? 'white' : 'black'}
          d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;

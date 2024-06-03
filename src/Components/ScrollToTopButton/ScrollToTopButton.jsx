import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
  className={`shadow-2xl fixed bottom-4 right-4 bg-${isHovered ? 'black' : 'white'} text-${isHovered ? 'white' : 'black'} z-10 p-3 m-3 rounded-full transition-all duration-300 ease-in-out transform ${isClicked ? 'hover:scale-105' : ''} ${isVisible || isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
  onClick={scrollToTop}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={`${isHovered ? 'white' : 'black'}`} d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
</button>

  
  );
};

export default ScrollToTopButton;

import { useEffect, useState } from "react"

const useIntersectionObserver = (elementRef, options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setIsIntersecting(entry.isIntersecting);
            });
        }, options);

        const element = elementRef.current;

        if (element)
            observer.observe(element);

        return () => {
            if (element)
                observer.unobserve(element);
            observer.disconnect();
        }
    }, [elementRef, options]);

    return [isIntersecting];
}

export default useIntersectionObserver;
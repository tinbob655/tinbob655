import { useEffect, useRef, useState } from 'react';


export default function useInView(threshold: number = 0.15) {

    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {

        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {

                //once an element is seen, do not hide it again
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(el);
                }
            },
            { threshold }
        );

        observer.observe(el);

        //clean when the component unmounts
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
}
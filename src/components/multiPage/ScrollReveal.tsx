import React from 'react';
import useInView from '../../hooks/useIntoView.ts';

interface params extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactElement;
    delay?: number;
}

export default function ScrollReveal({ children, delay = 0, ...props }: params): React.ReactElement {

    const { ref, inView } = useInView();

    const { style: propsStyle, ...restProps } = props;

    const animationStyle: React.CSSProperties = {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    };

    return (
        <div ref={ref} style={{ ...animationStyle, ...propsStyle }} {...restProps}>
            {children}
        </div>
    );
}
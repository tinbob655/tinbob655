import React, { useRef, useEffect } from "react";

interface params extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
    src: string,
    alt: string,
}

export default function FormattedImage({ src, alt, ...props }:params):React.ReactElement {
    const canvasRef = useRef<HTMLCanvasElement>(null);


    //does the mapping of each pixel
    useEffect(() => {

        //make sure we actually have an input image
        if (!src) return;

        const accentColor:[number, number, number] = [25, 212, 168];
        const threshold:number = 128;
        const img = new Image();

        img.crossOrigin = "anonymous";
        img.onload = () => {

            const canvas = canvasRef.current;

            //make sure we have a canvas
            if (!canvas) return;

            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx:CanvasRenderingContext2D|null = canvas.getContext("2d");
            if (!ctx) return;

            //create our image
            ctx.drawImage(img, 0, 0);
            const imageData:ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const d:Uint8ClampedArray = imageData.data;
            const [tr, tg, tb] = accentColor;

            //map each pixel of our image to a different colour
            for (let i = 0; i < d.length; i += 4) {
                if (d[i + 3] < 5) continue;

                const brightness = (d[i] * 0.299) + (d[i + 1] * 0.587) + (d[i + 2] * 0.114);
                if (brightness >= threshold) continue;

                const blend = 1 - brightness / threshold;
                d[i] = Math.round(tr * blend + d[i]     * (1 - blend));
                d[i + 1] = Math.round(tg * blend + d[i + 1] * (1 - blend));
                d[i + 2] = Math.round(tb * blend + d[i + 2] * (1 - blend));
            }

            //write the image to the canvas
            ctx.putImageData(imageData, 0, 0);
        };

        img.src = src;
    }, [src, alt]);

    return <canvas ref={canvasRef} aria-label={alt} {...props} />;
}
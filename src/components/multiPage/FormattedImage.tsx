import React, {useRef, useEffect, type RefObject} from "react";

interface params extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
    src: string,
    alt: string,
}

export default function FormattedImage({ src, alt, ...props }:params):React.ReactElement {
    const canvasRef:RefObject<HTMLCanvasElement|null> = useRef<HTMLCanvasElement>(null);


    useEffect(() => {
        if (!src) return;

        //use a worker to do the pixel mapping
        const worker = new Worker(
            new URL('../../workers/imageProcessor.worker.ts', import.meta.url),
            { type: 'module' }
        );

        //tell our worker to do work on the image
        const img:HTMLImageElement = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            createImageBitmap(img).then(bitmap => {
                worker.postMessage({ bitmap }, [bitmap]);
            });
        };

        //will fire when the worker is done with its work
        worker.onmessage = (e: MessageEvent<{ result: ImageBitmap }>) => {

            const canvas:HTMLCanvasElement|null = canvasRef.current;
            if (!canvas) return;

            //apply the new image data to our canvas element
            canvas.width = e.data.result.width;
            canvas.height = e.data.result.height;
            canvas.getContext('2d')!.drawImage(e.data.result, 0, 0);

            //kill the worker when we are done
            worker.terminate();
        };

        img.src = src;
        return () => worker.terminate();
    }, [src]);

    return <canvas ref={canvasRef} aria-label={alt} {...props} />;
}
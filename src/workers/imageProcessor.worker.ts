
//we will be asked to do work
self.onmessage = (e: MessageEvent<{ bitmap: ImageBitmap }>) => {

    //create a render of our image
    const { bitmap } = e.data;
    const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
    const ctx:OffscreenCanvasRenderingContext2D = canvas.getContext('2d')!;
    ctx.drawImage(bitmap, 0, 0);
    const imageData:ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const d:ImageDataArray = imageData.data;

    //values to determine if we need to alter a specific pixel
    const [tr, tg, tb] = [25, 212, 168];
    const threshold:number = 128;

    //repeat for each group of 4 pixels in the image
    for (let i = 0; i < d.length; i += 4) {

        //might not need to do anything because we already meet requirements
        if (d[i + 3] < 5) continue;

        const brightness:number = d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114;

        //we might not need to do anything because the pixel is dark enough
        if (brightness >= threshold) continue;

        //do pixel manipulation
        const blend:number = 1 - brightness / threshold;
        d[i] = Math.round(tr * blend + d[i] * (1 - blend));
        d[i + 1] = Math.round(tg * blend + d[i + 1] * (1 - blend));
        d[i + 2] = Math.round(tb * blend + d[i + 2] * (1 - blend));
    }

    ctx.putImageData(imageData, 0, 0);

    //send finished image back to frontend
    const result:ImageBitmap = canvas.transferToImageBitmap();
    (self as DedicatedWorkerGlobalScope).postMessage({ result }, [result]);
};
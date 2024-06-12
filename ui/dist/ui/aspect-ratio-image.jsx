import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import React from 'react';
var AspectRatioImage = function (_a) {
    var _b = _a.ratio, ratio = _b === void 0 ? 16 / 9 : _b, src = _a.src, alt = _a.alt;
    return (<AspectRatioPrimitive.Root ratio={ratio}>
      <Image fill className="object-cover" src={src} alt={alt}/>
    </AspectRatioPrimitive.Root>);
};
export default AspectRatioImage;

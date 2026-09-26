import React from 'react';

interface WarmiLogoProps {
  className?: string;
  size?: number | string;
}

export const WarmiLogo: React.FC<WarmiLogoProps> = ({ className = "w-6 h-6", size }) => {
  return (
    <svg
      viewBox="280 120 440 480"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Warmi Logo"
    >
      {/* 1. Elegant Face Profile Silhouette */}
      <path
        d="M 445 150 
           C 418 215, 398 252, 393 266 
           C 385 272, 342 292, 330 300 
           C 322 306, 324 316, 336 320 
           C 346 324, 353 328, 350 334 
           C 344 340, 330 344, 332 353 
           C 334 360, 346 362, 350 368 
           C 353 375, 334 385, 332 394 
           C 329 405, 342 416, 348 422 
           C 360 432, 398 445, 432 448 
           C 458 450, 470 465, 476 480 
           C 480 492, 464 512, 428 502"
        fill="none"
        stroke="#BA5E76"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 2. Closed Eyelid & Delicate Curved Eyelashes */}
      <path
        d="M 398 274 Q 424 290 450 284"
        fill="none"
        stroke="#BA5E76"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path d="M 406 285 Q 401 298 396 306" fill="none" stroke="#BA5E76" strokeWidth="8" strokeLinecap="round" />
      <path d="M 416 288 Q 413 303 409 311" fill="none" stroke="#BA5E76" strokeWidth="8" strokeLinecap="round" />
      <path d="M 426 289 Q 425 305 422 313" fill="none" stroke="#BA5E76" strokeWidth="8" strokeLinecap="round" />
      <path d="M 436 288 Q 438 303 438 311" fill="none" stroke="#BA5E76" strokeWidth="8" strokeLinecap="round" />
      <path d="M 445 285 Q 450 298 452 306" fill="none" stroke="#BA5E76" strokeWidth="7" strokeLinecap="round" />

      {/* 3. Five-Petal Flower in Hair */}
      {/* Petal 1: Top (pointing ~11 o'clock) */}
      <path d="M 555 260 C 510 220, 475 180, 532 165 C 550 195, 555 230, 555 260 Z" fill="#BA5E76" />
      <path d="M 555 260 C 555 210, 545 180, 532 165 C 560 185, 575 220, 555 260 Z" fill="#A44B63" opacity="0.35" />

      {/* Petal 2: Top-Right (pointing ~1:30 o'clock) */}
      <path d="M 555 260 C 585 195, 620 195, 690 225 C 645 255, 600 265, 555 260 Z" fill="#BA5E76" />
      <path d="M 555 260 C 600 230, 640 225, 690 225 C 645 240, 600 255, 555 260 Z" fill="#A44B63" opacity="0.35" />

      {/* Petal 3: Right (pointing ~3:30 o'clock) */}
      <path d="M 555 260 C 610 270, 675 285, 645 372 C 600 330, 575 295, 555 260 Z" fill="#BA5E76" />
      <path d="M 555 260 C 625 295, 655 330, 645 372 C 615 330, 585 295, 555 260 Z" fill="#A44B63" opacity="0.4" />

      {/* Petal 4: Left-bottom (pointing ~8:30 o'clock) */}
      <path d="M 555 260 C 510 275, 470 305, 472 328 C 500 305, 530 280, 555 260 Z" fill="#BA5E76" />

      {/* 4. Flowing Hair Ribbon Stem */}
      <path 
        d="M 545 285 
           C 555 330, 550 400, 538 460 
           C 525 520, 500 565, 478 585 
           C 488 555, 515 505, 524 450 
           C 532 390, 535 335, 525 290 Z" 
        fill="#BA5E76" 
      />

      {/* Secondary ribbon strand peeling to the right */}
      <path 
        d="M 542 360 
           C 565 390, 605 415, 605 460 
           C 605 488, 595 505, 582 510 
           C 592 485, 592 460, 572 430 
           C 555 405, 542 380, 538 360 Z" 
        fill="#D4849A" 
      />
    </svg>
  );
};

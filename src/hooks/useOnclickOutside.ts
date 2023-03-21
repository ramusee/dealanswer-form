import React, { useEffect } from 'react';

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: () => void,
): void {
  useEffect(() => {
    const listener = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('pointerdown', listener);
    return (): void => document.addEventListener('pointerdown', listener);
  }, [ref, handler]);
}

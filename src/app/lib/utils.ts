export function cn(...classes: (string | Record<string, boolean> | undefined)[]) {
  return classes
    .flatMap((cls) => {
      if (typeof cls === 'string') {
        return cls;
      } else if (typeof cls === 'object' && cls !== null) {
        return Object.keys(cls).filter((key) => cls[key]);
      }
      return [];
    })
    .filter(Boolean)
    .join(' ');
}

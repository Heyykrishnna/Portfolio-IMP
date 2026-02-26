interface Props {
  text: string;
  speed?: number;
  separator?: string;
}

export default function MarqueeText({ text, speed = 30, separator = '·' }: Props) {
  const items = Array(8).fill(text);

  return (
    <div
      className="overflow-hidden whitespace-nowrap w-full"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
    >
      <div
        className="inline-flex"
        style={{ animation: `marqueeScroll ${speed}s linear infinite` }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 pr-10 font-display font-semibold"
            style={{
              fontSize: 'clamp(32px, 5vw, 72px)',
              letterSpacing: '-0.02em',
              WebkitTextStroke: '1.5px rgba(232,224,212,0.45)',
              color: 'rgba(232,224,212,0.08)',
            }}
          >
            {item}
            <span
              className="ml-10"
              style={{
                WebkitTextStroke: '0',
                color: 'rgba(201,168,124,0.75)',
              }}
            >
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

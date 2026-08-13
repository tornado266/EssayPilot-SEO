type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "brand-mark" }: BrandMarkProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label="EssayPilot">
      <defs>
        <linearGradient id="brand-mark-navy" x1="10" y1="8" x2="54" y2="56">
          <stop stopColor="#173A58" />
          <stop offset="1" stopColor="#071B2E" />
        </linearGradient>
        <linearGradient id="brand-mark-gold" x1="14" y1="12" x2="50" y2="52">
          <stop stopColor="#E3C985" />
          <stop offset="0.48" stopColor="#A87C32" />
          <stop offset="1" stopColor="#D5B467" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="29" fill="url(#brand-mark-navy)" />
      <circle cx="32" cy="32" r="25" fill="none" stroke="url(#brand-mark-gold)" strokeWidth="1.8" />
      <circle cx="32" cy="32" r="22" fill="none" stroke="#D7BB76" strokeOpacity=".42" strokeWidth=".6" />
      <path d="M17 41c6.4-1.5 11.5-5.9 15-13 3.3 6.4 7.6 10.7 14 13" fill="none" stroke="#F7F0E3" strokeWidth="2.3" strokeLinecap="round" />
      <path d="m32 15 7.5 13L32 45l-7.5-17L32 15Z" fill="#F7F0E3" stroke="url(#brand-mark-gold)" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M32 15v12" fill="none" stroke="#D6B66A" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="32" cy="28" r="2.3" fill="#711F31" stroke="#D6B66A" strokeWidth="1" />
      <path d="M17 47h30" stroke="url(#brand-mark-gold)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

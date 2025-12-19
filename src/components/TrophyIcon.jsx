export default function TrophyIcon({ size = 64 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 6h32v8c0 12-8 22-16 24-8-2-16-12-16-24V6z" fill="#f5b301" />
      <path d="M8 10h8v8c0 8-4 14-10 16V18c0-4 2-8 2-8z" fill="#f5b301" />
      <path d="M48 10h8c0 0 2 4 2 8v16c-6-2-10-8-10-16v-8z" fill="#f5b301" />
      <rect x="28" y="36" width="8" height="10" fill="#f5b301" />
      <rect x="20" y="46" width="24" height="6" rx="3" fill="#f5b301" />
    </svg>
  );
}

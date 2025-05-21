const SubstackIcon = ({ size = 24 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v12a1.5 1.5 0 001.5 1.5h3l3 3 3-3h6a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0019.5 3zm-3 10.5h-9v-1.5h9v1.5zm0-3h-9V9h9v1.5zm0-3h-9V6h9v1.5z" />
    </svg>
  );
};

export default SubstackIcon;

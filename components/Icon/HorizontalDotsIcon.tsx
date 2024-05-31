interface IconProps {
	height: number;
	width: number;
	color?: string;
}

const HorizontalDotsIcon: React.FC<IconProps> = (props) => {
	const IconStyle = {
		height: `${props.height * 4}px`,
		width: `${props.width * 4}px`,
		color: `${props.color}`,
	};
	return (
		<svg
			style={IconStyle}
			className="w-6 h-6 text-gray-800 dark:text-white"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24">
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="3"
				d="M6 12h.01m6 0h.01m5.99 0h.01"
			/>
		</svg>
	);
};

export default HorizontalDotsIcon;

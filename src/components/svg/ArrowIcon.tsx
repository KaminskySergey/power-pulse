'use client'

interface IArrowIcon {
    className?: string
    onClick?: () => void
    isDisabled?: boolean
}

export default function ArrowIcon({ className, onClick, isDisabled }: IArrowIcon) {
    return <svg
        onClick={onClick}
        className={className}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.45718 14.9572L4.04297 13.5429L9.83586 7.75005L4.04297 1.95715L5.45718 0.542938L12.6643 7.75005L5.45718 14.9572Z"
        />
    </svg>
}

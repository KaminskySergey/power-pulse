
interface ICheckSucess {
    text: string
}

export default function CheckSucess({ text }: ICheckSucess) {
    return <div className="flex gap-[4px] items-center">
        <div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_21367_212)">
                    <path d="M7.99998 14.6666C4.31798 14.6666 1.33331 11.682 1.33331 7.99998C1.33331 4.31798 4.31798 1.33331 7.99998 1.33331C11.682 1.33331 14.6666 4.31798 14.6666 7.99998C14.6666 11.682 11.682 14.6666 7.99998 14.6666ZM7.22931 10.99L11.9426 6.27598L11 5.33331L7.22931 9.10465L5.34331 7.21865L4.40065 8.16131L7.22931 10.99Z" fill="#3CBF61" />
                </g>
                <defs>
                    <clipPath id="clip0_21367_212">
                        <rect width="16" height="16" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
        <div>
            <p className="text-[12px] text-[#3CBF61] font-normal leading-[18px]">{text}</p>
        </div>
    </div>


}

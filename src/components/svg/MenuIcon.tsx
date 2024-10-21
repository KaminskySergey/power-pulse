
interface IMenuIcon {
    width: string
    height: string
    className: string
}

export default function MenuIcon({width, height, className}: IMenuIcon) {
    return <svg width={width} height={height} className={className}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H15M3 6H21M3 18H21" stroke="#E6533C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
}

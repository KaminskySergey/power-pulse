
export default function CrossIconSearch({className, onClick}: {className: string, onClick: () => void}) {
    return <svg onClick={onClick} className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 1L1 13M1 1L13 13" stroke="#E6533C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
}

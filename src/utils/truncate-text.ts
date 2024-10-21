export const truncateText = (text: string | undefined, maxLength: number) => {
    if (typeof text !== 'string' || text.length === 0) {
        return '';
    }
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
};
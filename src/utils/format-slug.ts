export function formatSlug(slug: string) {
    const words = slug.split('-');

    const formattedSlug = words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return formattedSlug;
}
import Link from 'next/link';

export const createLinkedContent = (content, keywordToSlug) => {
    const parts = [];
    let lastIndex = 0;

    Object.entries(keywordToSlug).forEach(([keyword, slug]) => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        let match;

        while ((match = regex.exec(content)) !== null) {
            parts.push(content.slice(lastIndex, match.index));
            parts.push(
                <Link
                    key={`${slug}-${match.index}`}
                    href={`/${slug}`}
                    className="font-semibold"
                >
                    {keyword}
                </Link>
            );
            lastIndex = regex.lastIndex;
        }
    });

    parts.push(content.slice(lastIndex));
    return parts;
};
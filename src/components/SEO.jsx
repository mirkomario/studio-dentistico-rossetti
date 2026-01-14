import { useEffect } from 'react';

const SEO = ({ title, description }) => {
    useEffect(() => {
        // Update Title
        const prevTitle = document.title;
        document.title = `${title} | Studio Dentistico Rossetti`;

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        const prevDescription = metaDescription ? metaDescription.getAttribute('content') : '';
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }

        return () => {
            document.title = prevTitle;
            if (metaDescription) {
                metaDescription.setAttribute('content', prevDescription);
            }
        };
    }, [title, description]);

    return null;
};

export default SEO;

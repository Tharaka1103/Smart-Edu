import { home, about, blog, contact } from './content';

const renderContent = (t) => {
    return {
        home,
        about,
        blog,
        contact
    }
};

export { renderContent };
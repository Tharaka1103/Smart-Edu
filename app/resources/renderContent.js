import { home, about, blog, contact, classes, teachers, categories } from './content';

const renderContent = (t) => {
    return {
        home,
        about,
        blog,
        contact,
        classes,
        teachers,
        categories
    }
};

export { renderContent };
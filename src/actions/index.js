const menuLoaded = (newMenu) => {
    return {
        // ind_4
        type: 'MENU_LOADED',
        payload: newMenu,
    }
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    }
};

const menuError = () => {
    return {
        type: 'MENU_ERROR',
    }
};

export {
    menuLoaded,
    menuRequested,
    menuError,
};

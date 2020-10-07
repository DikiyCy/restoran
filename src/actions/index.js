const menuLoaded = (newMenu) => {
    return {
        // ind_4
        type: 'MENU_LOADED',
        payload: newMenu
    }
};

export {
    menuLoaded
};

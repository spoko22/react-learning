export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    }
};

export const deselectLibrary = (libraryId) => {
    return {
        type: 'deselect_library',
        payload: libraryId
    }
};
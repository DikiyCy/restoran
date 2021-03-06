import React from 'react';
import RestoServiceContext from '../resto-service-context';

// hoc - функция, кот. возвращает функцию
const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            // ind_3
            <RestoServiceContext.Consumer>
                {
                    (RestoService) => {
                        return <Wrapped {...props} RestoService = {RestoService}/>
                    }
                }
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;

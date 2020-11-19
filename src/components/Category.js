import { Container } from 'reactstrap'
import React, { useState, useEffect } from 'react'
import ArticlesCarousel from '../containers/ArticlesCarousel';
import { ServiceFactory } from '../controlllers/services/ServiceFactory';
import { getRequest } from "../controlllers/services/ServiceInteractor";

export default function Category() {
    const [categories, setCategories] = useState([])
    const url = `${ServiceFactory.routeApi}${ServiceFactory.routes.sections}`
    useEffect(() => {
        getRequest(url).then((res) => {
            res.sections.length > 0 ? setCategories(res.sections) : setCategories(null);

        });
    }, [url]);

    return (
        <Container>
            {categories.map((category) => {
                return (
                    <ArticlesCarousel url={url + category.id} />
                );
            })}
        </Container>
    )
}

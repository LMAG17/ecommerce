import { Container } from '@material-ui/core'
import React from 'react'
import ArticlesCarousel from '../containers/ArticlesCarousel';
import { ServiceFactory } from '../controlllers/services/ServiceFactory';

export default function Category() {
    const [categories, setCategories] = useState([])
    const url =`${ServiceFactory.routeApi}${ServiceFactory.routes.sections}`
    useEffect(() => {
        getRequest(url).then((res) => {
          res.sections.length > 0 ? setCategories(res.sections) : setCategories(null);
        
        });
      }, [props.url]);
    
    return (
        <Container>
            {categories.map((category)=>{
                return(
                    <ArticlesCarousel  url={url+category.id}/>  
                );
            })}
        </Container>
    )
}

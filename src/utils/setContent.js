import Spinner from '../components/spinner/Spinner';
import Skeleton from '../components/skeleton/Skeleton';
import ErrorMessage from '../components/errorMessage/errorMessage';


const setContent = (process, Component, data) => {
    switch (process){
        case 'waiting':
            return <Skeleton/>
            break;
        case 'loading':
            return <Spinner/>
            break;
        case 'confirmed':
            return <Component data={data}/>
            break;
        case 'error':
            return <ErrorMessage/>
            break;
        default:
            throw new Error('Unexpected state');
    }
}
export default setContent;
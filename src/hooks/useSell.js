import { useDataContext } from '../contexts/DataContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';


export const useSell = () => {
    const {
		dispatch,
    } = useDataContext();
    
    const sell = async item => {
        dispatch({ type: 'GET_DATA_START' });

        try {
            const res = await axiosWithAuth().post('/adv/sell', { name: item, confirm: 'yes' })

            dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
            dispatch({ type: 'DROP_ITEM', payload: item });

        } catch (err) {
            console.log(err);
            dispatch({ type: 'GET_DATA_FAILURE' });
        }
    };

    return sell;
}

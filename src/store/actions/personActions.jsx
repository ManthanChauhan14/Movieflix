export {removetv} from '../reducers/tvSlice'
import axios from '../../utils/Axios'
import { loadtv } from '../reducers/tvSlice';

export const asyncloadtv=(id)=>async(dispatch,getState)=>
{
    try{
        const detail = await axios.get(`/tv/${id}`);
        const externalid = await axios.get(`/tv/${id}/external_ids`);
        const tvCredits = await axios.get(`/tv/${id}/combined_credits`);
        const movieCredits = await axios.get(`/tv/${id}/movie_credits`);
        
        let theultimatedetails={
            detail:detail.data,
            externalid:externalid.data,
            movieCredits:movieCredits.data,
            tvCredits:tvCredits.data,
        };
        dispatch(loadtv(theultimatedetails))
        console.log(theultimatedetails);   
    }
    catch(err){
        console.log("Error is",err);        
    }
}

export {removetv} from '../reducers/tvSlice'
import axios from '../../utils/Axios'
import { loadtv } from '../reducers/tvSlice';

export const asyncloadtv=(id)=>async(dispatch,getState)=>
{
    try{
        const detail = await axios.get(`/tv/${id}`);
        const externalid = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const translations = await axios.get(`/tv/${id}/translations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchproviders = await axios.get(`/tv/${id}/watch/providers`);

        let theultimatedetails={
            detail:detail.data,
            externalid:externalid.data,
            recommendations:recommendations.data.results,
            similar:similar.data,
            translations:translations.data.translations.map((t)=>t.english_name),
            videos:videos.data.results.find((m)=>m.type==="Trailer"),
            watchproviders:watchproviders.data.results.IN,
        };
        dispatch(loadtv(theultimatedetails))
        console.log(theultimatedetails);   
    }
    catch(err){
        console.log("Error is",err);        
    }
}

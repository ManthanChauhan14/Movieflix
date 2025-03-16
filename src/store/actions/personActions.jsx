export { removeperson } from "../reducers/personSlice";
import axios from "../../utils/Axios"
import { loadperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch, getstate) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const tvCredits = await axios.get(`/person/${id}/combined_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);

    let theultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      movieCredits: movieCredits.data,
      tvCredits: tvCredits.data
    };
    dispatch(loadperson(theultimatedetails))
    console.log(theultimatedetails);

  } catch (err) {
    console.log("Error", err);

  }
}
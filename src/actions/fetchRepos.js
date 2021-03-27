import axios from 'axios';
import github_data from '../constants/const.js';
import body from '../constants/queries';


export function fetchrepos() {
    return function (dispatch) {
        axios.post(github_data.baseurl, {query: body}, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${github_data.key}`,
                }
            }
        ).then(res => {
            dispatch({type: "FETCH_REPOS", payload: res.data.data.user.repositories.nodes});
        }).catch(err => {
            console.error(err);
        });
    }
}
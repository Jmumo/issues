import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchrepos} from '../actions/fetchRepos';


export default function Home() {
    const repositories = useSelector((state) => state.repositories).repositories;

    const dispatch = useDispatch();

    const getRepoAction = () => dispatch(fetchrepos());

    useEffect(() => {
        getRepoAction();
    }, [])

    return (
        <div className="">
            <div className=" card col-md-8 mx-auto mt-3 ">
                <select className="custom-select mt-3">
                    {console.log(repositories.map(repo => repo.name))}
                </select>
            </div>
        </div>
    );
}

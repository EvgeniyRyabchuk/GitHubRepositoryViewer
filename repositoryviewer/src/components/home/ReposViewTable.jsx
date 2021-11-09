import React, {useContext, useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUndoAlt} from "@fortawesome/free-solid-svg-icons/faUndoAlt";
import DefBtn from "../UI/button/DefBtn/DefBtn";
import {useFetching} from "../../hooks/useFetching";
import {UserContext} from "../../context";
import GitHubService from "../../API/GitHubService";
import ItemList from "./ItemList";
import Loader from "../UI/loader/FetchLoader/Loader";


const ReposViewTable = ({curPath, changePath, isRefresh, setIsRefresh, changeBranches, branches, curBranch, changeCurBranch}) => {

    const { user, setUser } = useContext(UserContext);
    const [ itemsList, setItemsList ] = useState([]);

    const [reposName, setReposName] = useState('');
    const reposData = useRef();

    const openFolder = (repos, path) => {
        const items = repos.tree.filter((e) => {
            return e.owner === path ? true : false
        })
        changePath(path);
        return items;
    }

    useEffect(() => {
        if(reposData.current)
        {
            const items = openFolder(reposData.current, curPath);
            setItemsList(items);
            setIsRefresh(false);
        }
    }, [isRefresh])

    const pathDataModify = (data) => {
        for(let i of data.tree)
        {
            let pathArray = i.path.split("/");
            i.name = pathArray.pop();
            i.owner = pathArray.join("/");
        }
    }

    const branchesListDataModify = (data) => {
        for(let i of data) {
            data.indexOf(i) === 0 ? i.isSelect = true : i.isSelect = false;
        }
    }

    useEffect(() => {
        if(curBranch) {
            fetchReposContent(reposName, curBranch.name);
        }
    }, [curBranch]);

    // получение репозиторий пользователя
    const [fetchRepos, isReposLoading, reposError] = useFetching(async (username) => {
            const data = await GitHubService.getRepos(username);
            setItemsList(data);
    });

    // получение файлов корня репозитория (открытие репозитория)
    const [fetchReposContent, isReposContentLoading, reposContentError] = useFetching(async (reposName, branchName) => {
        let branches = await GitHubService.getBranches(user.username, reposName);
        changeBranches(branches);
        const selectedBranch = branchName ? branchName : branches[0];
        const filesData = await GitHubService.getReposContent(user.username, reposName, selectedBranch.name);
        pathDataModify(filesData);
        branchesListDataModify(branches);
        reposData.current = filesData;
        const items = openFolder(filesData, '');
        setItemsList(items);
        // changeCurBranch(selectedBranch);
        changeBranches(branches);
        return selectedBranch;
    });

    useEffect(() => {
        if(user) {
            fetchRepos(user.username);
        }
    },[user]);

    const openDirOrFile = async (key, type) => {

        if(type === 'repos') {
            setReposName(key);
            const branch = await fetchReposContent(key); // key = reposName
            console.log(branch);
            changeCurBranch(branch);
        }
        else {
            if(type === 'tree')
            {
                const items = openFolder(reposData.current, key);
                setItemsList(items);
            }
            else if(type === 'blob') {
                GitHubService.getBlob(user.username, reposName,
                    curBranch ? curBranch.name : branches[0].name, key);
            }
        }
    }

    const back = () => {
        const path = curPath.split('/');
        console.log(path);
        if(path.length === 1 && path[0] === '') {
            fetchRepos(user.username);
            setReposName('');
            changeBranches([]);
            return;
        }

        path.splice(path.length - 1, 1);
        const backPath = path.join('/');
        const items = openFolder(reposData.current, backPath);
        setItemsList(items);
    }

    return (
        <div className="file-list-wrapper">
            <h1 style={{textAlign: 'center', marginBottom: '50px'}}>{reposName}</h1>
            <div className="file-list-container">
                <div className="list-header-wrapper">
                    <div className="list-header-container">
                        <div className="d-flex align-items-center">
                            <DefBtn id="folder-back">
                                <FontAwesomeIcon id="folder-back" icon={faUndoAlt} onClick={back}/>
                            </DefBtn>

                            <span className="header-name">Name</span>
                        </div>
                        <div className="file-metadata">
                            <span className="type">Item type</span>
                            <span className="last-change">Date</span>
                            <span className="size">Size</span>
                        </div>
                    </div>
                </div>
                {isReposLoading || isReposContentLoading ? <Loader/> :
                    <ItemList data={itemsList} select={openDirOrFile}/>
                }

                {reposError && <h1 style={{color: 'red'}}>{reposError}</h1>}
                {reposContentError && <h1 style={{color: 'red'}}>{reposContentError}</h1>}

            </div>
        </div>
    );
};

export default ReposViewTable;
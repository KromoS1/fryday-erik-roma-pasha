import React, {memo, useEffect} from 'react';
import {Profile} from './Profile';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../app/Store';
import {getPacks} from "../packs/PacksReducer";
import {ModalContainer} from "../../commonComponents/Modal/ModalContainer";

export interface ProfileType {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
    name: string
    verified: boolean
    publicCardPacksCount: number
    created: string
    updated: string
    avatar: string
}

export const ProfileContainer = memo(() => {
    const dispatch = useDispatch();
    const profile = useSelector<AppRootStateType, ProfileType>(state => state.profile);
    const meID = useSelector<AppRootStateType, string>(state => state.profile._id);

    useEffect(() => {
        meID
            ? dispatch(getPacks({page: 1, pageCount: 5, user_id: meID, min: 0, max: 5, sortPacks: ''}))
            : dispatch(getPacks({page: 1, pageCount: 5, min: 0, max: 5, sortPacks: ''}))
    }, [dispatch,meID])

    return (
        <>
            <Profile profile={profile} meID={meID} name={'profile'}/>
            <ModalContainer/>
        </>
    )
})
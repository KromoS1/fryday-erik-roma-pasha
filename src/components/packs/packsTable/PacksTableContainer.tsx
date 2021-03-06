import React, {FC, memo, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/Store";
import {PacksStateType, removePack} from "../PacksReducer";
import {PacksTable} from "./PacksTable";
import {ComponentNameType} from "../PacksPage";
import {SearchAndButton} from "../../../commonComponents/HeadersForPage/SearchAndButton";
import {PackDataRequestType} from "../../../app/requestDataReducerPacks";

interface PacksContainerType extends ComponentNameType {
    meID?: string
}

export const PacksTableContainer: FC<PacksContainerType> = memo(props => {
    const {packs, packsCount} = useSelector<AppRootStateType, PacksStateType>(state => state.packs);
    const dataParams = useSelector<AppRootStateType, PackDataRequestType>(state => state.getPacksParams);
    const dispatch = useDispatch();

    const remove = useCallback((id: string) => {
        dispatch(removePack(dataParams, id));
    }, [dispatch, dataParams]);

    return (
        <>
            <SearchAndButton name={'pack'}/>
            <PacksTable packs={packs}
                        packsCount={packsCount}
                        remove={remove}
                        meID={props.meID}
                        name={props.name}
                        dataParams={dataParams}/>
        </>
    )
})
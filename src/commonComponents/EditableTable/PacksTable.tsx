import React from 'react';
import 'antd/dist/antd.css';
import {Button, Space, Table} from 'antd';
import {PaginationProps} from "antd/lib/pagination/Pagination";
import {useDispatch} from "react-redux";
import {getPacks, PackType} from "../../components/packs/PacksReducer";
import {DateMaker} from "../../components/utils/Utils";
import {NavLink} from 'react-router-dom';
import {ComponentNameType} from "../../components/packs/PacksPage";
import {DataRequestType} from "../../app/requestDataReducer";

type PropsType = ComponentNameType & {
    dataParams: DataRequestType
    packs: PackType[],
    packsCount: number
    meID?: string
    remove: (id: string) => void
};
export type PackItemType = {
    key: string,
    name: string,
    cards: number,
    updated: string,
    created: string,
};

export const PacksTable = (props: PropsType) => {
    const dispatch = useDispatch();

    const getSortedDateIntoColumns = (a: PackItemType, b: PackItemType) => {
        return new Date(a.created) > new Date(b.created) ? -1 : 1
    }

    const getPacksForTable = (page: number) => {
        props.meID
            ? dispatch(getPacks({...props.dataParams, page: page, pageCount: 5, user_id: props.meID}))
            : dispatch(getPacks({...props.dataParams, page: page, pageCount: 5,}))
    }

    const data: PackItemType[] = [];
    props.packs.forEach(i => {
        data.push({
            key: i._id,
            name: i.name,
            cards: i.cardsCount,
            updated: (DateMaker(i.updated)).toString(),
            created: (DateMaker(i.created)).toString(),
        })
    });

    const columns = [
        {
            title: 'Name',
            key: 'name',
            render: (data: PackItemType) => {
                if (props.name === 'packs') return <><NavLink to={`/packs/cards/${data.key}`}>{data.name}</NavLink></>
                if (props.name === 'profile') return <><NavLink to={`/profile/cards/${data.key}`}>{data.name}</NavLink></>
            },
            sorter: (a: PackItemType, b: PackItemType) => {
                return a.name > b.name ? -1 : 1
            },
        },
        {
            title: 'Cards',
            dataIndex: 'cards',
            key: 'cards',
            sorter: (a: PackItemType, b: PackItemType) => a.cards - b.cards
        },
        {
            title: 'Last Update',
            dataIndex: 'updated',
            key: 'updated',
            sorter: getSortedDateIntoColumns
        },
        {
            title: 'Created by',
            key: 'created',
            dataIndex: 'created',
            sorter: getSortedDateIntoColumns
        },
        {
            title: 'Action',
            key: 'action',
            render: (data: PackItemType) =>
                (
                    <Space size="middle">
                        <Button onClick={() => console.log(data)}>Изменить</Button>
                        <Button type="primary" danger onClick={() => {
                            props.remove(data.key);
                        }}>Удалить</Button>
                    </Space>
                ),
        },
    ];
    const paginationSettings: PaginationProps = {
        pageSize: 5,
        total: props.packsCount,
        onChange: (page: number) => {
            getPacksForTable(page);
        },
        showSizeChanger: false,
    };


    return <Table columns={columns} dataSource={data} pagination={{...paginationSettings, position: ['bottomCenter']}}/>
}
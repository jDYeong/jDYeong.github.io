import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase.js';
import * as S from "./index.style.js"
import ListTitleArea from '../common/layout/listTitleArea.js';
import {ListItemWrite, ListItemDefault, ListItemSecret, ListItemModify} from './components/listItem.js';
import { ReactComponent as IconNodata } from '../../assets/images/icons/icon-nodata.svg';

export default function Guestbook(loginState){
    const [items, setItems] = useState([]); // 데이터를 저장할 state
    const [mode, setMode] = useState('read')
    const [loading, setLoading] = useState(true); // 로딩 상태

    useEffect(() => {
        const fetchData = async () => {
            try {
                const board = collection(db, "guestbook");
                onSnapshot((query(board, orderBy("write_date", "desc"))), (snapshot) => {
                    const itemsList = snapshot.docs.map((doc) => {
                        const data = doc.data();
                        // `write_date` 필드가 Timestamp 형식이라면 변환
                        const date = data.write_date && typeof data.write_date.toDate === 'function'
                            ? data.write_date.toDate().toLocaleString().slice(0, 12)
                            : 'No Date';
                        return {
                            ...data,
                            id: doc.id,
                            write_date: date,
                        };
                    });
                    setItems(itemsList);
                });
            }
            catch (error) {
                console.error("Error fetching data: ", error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    } ,[]);

    return(
        <S.GBContent className='GB_content'>
            <ListTitleArea title={'방문록'}/>

            <S.ListContent className='list_content'>
                <ListItemWrite />
                <ul>
                    { items.length === 0 ? (
                        <S.ListNodata>
                            <IconNodata />
                            <p>게시글이 존재하지 않습니다.</p>
                        </S.ListNodata>
                    ) : (
                        items.map((item, i) => (
                            item.modify
                            ? <ListItemModify key={item.id.toString()} mode={mode} allData={items} number={i} />
                            : <ListItemDefault key={item.id.toString()} mode={mode} allData={items} number={i} />
                        ))
                    )
                }
                </ul>
            </S.ListContent>
        </S.GBContent>
    )
}
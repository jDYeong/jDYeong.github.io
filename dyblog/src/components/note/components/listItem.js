import React, { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Link } from "react-router-dom";
import {db} from "../../../firebase.js"
import * as S from './components.style'
import LogindArea from '../../common/layout/lodingArea'
import { ReactComponent as IconNodata } from '../../../assets/images/icons/icon-nodata.svg';

const ListArea = () => {

    const [items, setItems] = useState([]); // 데이터를 저장할 state
    const [loading, setLoading] = useState(true); // 로딩 상태

    useEffect(() => {
        const fetchData = async () => {
            try {
                const board = collection(db, "note")
                const querySnapshot = await getDocs(query(board, orderBy("date", "desc")));
                const itemsList = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    
                    // `date` 필드가 Timestamp 형식이라면 변환
                    const date = data.date && typeof data.date.toDate === 'function'
                        ? data.date.toDate().toLocaleString().slice(0, 12)
                        : 'No Date';
                    return {
                        id: doc.id,
                        ...data,
                        date: date,
                    };
                });
                setItems(itemsList);
            }
            catch (error) {
                console.error("Error fetching data: ", error);
            }
            finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);

    if (loading) {
        return <LogindArea />;
    }

    return (
        <S.ListArea>
            { items.length === 0 ? (
                    <S.ListNodata>
                        <IconNodata />
                        <p>게시글이 존재하지 않습니다.</p>
                    </S.ListNodata>
                ) : (
                    items.map((item, i) => (
                        <S.ListItem key={item.id.toString()}>
                            
                            <Link to={`/note/detail/${item.id.toString()}`}>
                                {item.imageUrl ? <S.ImgBox><img src={item.imageUrl} alt="목록이미지" /></S.ImgBox> : ''}
                                <S.TxtBox>
                                    <S.Title>{item.title}</S.Title>
                                    <S.SubTitle>{item.subtitle}</S.SubTitle>
                                    <S.Row>
                                        <S.Txt>관리자</S.Txt>
                                        <S.Txt>{item.date}</S.Txt>
                                    </S.Row>
                                </S.TxtBox>
                            </Link>
                        </S.ListItem>
                    ))
                )
            }
        </S.ListArea>
    );
};

export default ListArea;
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import {db} from "../../../firebase.js"

import { collection, getDocs } from "firebase/firestore";

import * as SC from "../components/components.style.js"
import * as S from "./index.style.js"
import * as C from "../../common/layout/layout.style.js";
import TagsListArea from '../components/tagsItem.js'
import DetailTitleArea from '../../common/layout/detailTitleArea.js';
import DetailPagingArea from '../../common/layout/detailPagingArea.js';
import BtnClose from '../../common/buttons/btnClose'
import ThemeButtonBtn from '../../common/buttons/themaButton'
import { Mobile, Tablet } from "../../../common/MediaQuery.js";

const NoteDetail = ({loginState}) => {

    const {noteId} = useParams();
    const [data, setData] = useState(null);
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리

    // db에서 데이터 가져와서 data state에 넣기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, "note", noteId); // 'collectionName'과 문서 id를 지정
                const docSnap = await getDoc(docRef);
        
                if (docSnap.exists()) {
                    setData(docSnap.data());
                    setContent(docSnap.data().content);
                } 
                else {
                    console.log("No such document!");
                }
            } 
            catch (error) {
                console.error("Error fetching document:", error);
            }
        };
        fetchData();
    }, [noteId]);

    const [prevDoc, setPrevDoc] = useState(null); // 이전 문서
    const [nextDoc, setNextDoc] = useState(null); // 다음 문서
    const [allDocs, setAllDocs] = useState([]); // 모든 문서 리스트

    //이전,다음 데이터 배열로 저장
    useEffect(() => {
        const fetchAllData = async () => {
            const querySnapshot = await getDocs(collection(db, "note"));
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({
                    id: doc.id,
                    title: doc.data().title, // 문서의 title 필드 가져오기
                });
            });
            setAllDocs(docs);
            setIsLoading(false);
        }
        fetchAllData();

    }, []);

    useEffect(() => {
        if (allDocs.length > 0 && noteId) {
            const currentIndex = allDocs.findIndex(doc => doc.id === noteId);
            if (currentIndex !== -1) {
                setPrevDoc(allDocs[currentIndex - 1] || null); // 이전 ID
                setNextDoc(allDocs[currentIndex + 1] || null); // 다음 ID
            }
        }
    }, [allDocs, noteId]);

    if (isLoading) {
        return <C.LodingArea />; // 데이터가 로드 중일 때
    }

    return (
        <S.DetailContent className='note_content'>
            <SC.SubHeader className='main-btns'>
                {loginState ? <Tablet><SC.DeleteBtn className='btn-delete'>삭제하기</SC.DeleteBtn></Tablet> : ''}
                {loginState ? <Mobile><SC.DeleteBtn className='btn-delete'>삭제하기</SC.DeleteBtn></Mobile> : ''}
                <ThemeButtonBtn />
                <BtnClose />
            </SC.SubHeader>

            <S.NoteDetailContent>
                <DetailTitleArea
                    cate={'NOTE'}
                    title={data?.title}
                    subTitle={data?.subtitle}
                    date={data?.date ? data.date.toDate().toLocaleDateString() : ""}
                />

                <S.NoteDescArea>
                    <S.DetailContentTxt dangerouslySetInnerHTML={{ __html: content }} />
                    <TagsListArea tagData={data?.tags} />
                </S.NoteDescArea>

                {/* 상세 페이징 */}
                <DetailPagingArea data={data} noteId={noteId} prevDoc={prevDoc} nextDoc={nextDoc} loginState={loginState} />

            </S.NoteDetailContent>
        </S.DetailContent>
    );
};

export default NoteDetail;
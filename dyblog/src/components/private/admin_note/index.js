import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min.js';
import ReactQuill, { Quill } from "react-quill";
import { db } from '../../../firebase'
import { addDoc, collection } from 'firebase/firestore'

import * as S from "./index.style.js"
import * as C from "../index.style.js"
import * as SC from "../admin_components/admin_components.style.js"
import { Pc, Mobile, Tablet } from '../../../common/MediaQuery';
import AdminHeader from '../admin_components/header';
import BtnClose from '../../../components/common/buttons/btnClose'
import ThemeButtonBtn from '../../../components/common/buttons/themaButton'

const AdminNote = () => {
    const router = useRouter();
    const history = useHistory();
    const noteCollectionRef = collection(db, "note");

    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");

	const [titleText, setTitleText] = useState('제목을 입력해 주세요.')
	const [subTitleText, setSubTitleText] = useState('짧은 요약을 입력해 주세요.')
	const [tagsText, setTagsText] = useState('태그 입력 ‘,’로 구분')

    const [titleErrType, setTitleErrType] = useState(false);
    const [subTitleErrType, setSubTitleErrType] = useState(false);
    const [tagseErrType, setTagsErrType] = useState(false);
	const [errText, setErrText] = useState('값을 입력해 주세요.')

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const onChangeSubTitle = (e) => {
        setSubTitle(e.target.value);
    }
    const onChangeTags = (e) => {
        setTags(e.target.value);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        var date = new Date();

        try {
            if(!title){
                setTitleErrType(true)
                setTimeout(() => setTitleErrType(false), 1000);
            }
            if(!subTitle){
                setSubTitleErrType(true)
                setTimeout(() => setSubTitleErrType(false), 1000);
            }
            if(title && subTitle){
                await addDoc(noteCollectionRef, {
                    title,
                    subtitle: subTitle,
                    content,
                    tags,
                    date,
                })
                .then((res) => {
                    //console.log(res.id)
                    history.push(`/note/detail/${res.id}`)
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <SC.AdminContent className='admin_content'>

            <SC.SubHeader className='main-btns'>
                <Tablet><SC.BtnSave type='submit' onClick={handleSubmit} className='btn_save'>저장하기</SC.BtnSave></Tablet>
                <Mobile><SC.BtnSave type='submit' onClick={handleSubmit} className='btn_save'>저장하기</SC.BtnSave></Mobile>
                <ThemeButtonBtn />
                <BtnClose />
            </SC.SubHeader>

            <S.AdminNoteContent>
                <AdminHeader title={`NOTE`}/>

                <form action="" onSubmit={handleSubmit}>
                    <SC.TitleArea>
                        <SC.InpBox $error={titleErrType}>
                            <SC.Input placeholder={!titleErrType ? titleText : errText} onChange={onChangeTitle} />
                        </SC.InpBox>
                        <SC.InpBox $error={subTitleErrType}>
                            <SC.Input placeholder={!subTitleErrType ? subTitleText : errText} onChange={onChangeSubTitle} />
                        </SC.InpBox>
                    </SC.TitleArea>
                    <SC.DescArea>
                        <SC.InpBox>
                            <ReactQuill style={{height: "250px"}} onChange={setContent} />
                        </SC.InpBox>
                        <SC.InpBox>
                            <SC.Input placeholder={tagsText} onChange={onChangeTags} />
                        </SC.InpBox>
                    </SC.DescArea>
                    <SC.BtnArea>
                        <SC.BtnSave type='submit' className='btn_save'>저장</SC.BtnSave>
                        <SC.BtnCancel type='button' className='btn_cancel'>취소</SC.BtnCancel>
                    </SC.BtnArea>
                </form>
            </S.AdminNoteContent>
        </SC.AdminContent>
    );
};

export default AdminNote;
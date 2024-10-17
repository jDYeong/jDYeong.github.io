import React, { useState } from 'react';
import ReactQuill, { Quill } from "react-quill";
import { db } from '../../../firebase'
import { addDoc, collection } from 'firebase/firestore'

import * as S from "./index.style.js"
import * as C from "../index.style.js"
import * as SC from "../admin_common/admin_common.style.js"
import { Pc, Mobile, Tablet } from '../../../common/MediaQuery';
import AdminHeader from '../admin_common/header';
import BtnClose from '../../../components/common/btnClose'
import ThemeButtonBtn from '../../../components/common/themaButton'

const AdminNote = () => {
    const noteCollectionRef = collection(db, "note");

    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState();

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
        var date = new Date().toISOString().slice(0, 10);

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
            }
            //.then((res) => console.log(res));
            //router.push(`/note/${result.data.createBoard.number}`)
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
                        <SC.InpBox $error={tagseErrType}>
                            <SC.Input placeholder={!tagseErrType ? tagsText : errText} onChange={onChangeTags} />
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
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min.js';
import { db, storage } from '../../../firebase'
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { useLocation } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

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
    const quillRef = useRef(null); // React-Quill 인스턴스를 위한 ref
    const noteCollectionRef = collection(db, "note");

    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        content: '',
        tags: '',
        //imagesUrl: '',
    });
    const [imageUrl, setImageUrl] = useState(""); // 새로운 상태 추가

	const [titleText, setTitleText] = useState('제목을 입력해 주세요.')
	const [subTitleText, setSubTitleText] = useState('부제목을 입력해 주세요.')
	const [tagsText, setTagsText] = useState('태그 입력 ‘,’로 구분')

    const [titleErrType, setTitleErrType] = useState(false);
    const [subTitleErrType, setSubTitleErrType] = useState(false);
    const [tagseErrType, setTagsErrType] = useState(false);
	const [errText, setErrText] = useState('값을 입력해 주세요.')

    //수정버튼으로 값 가져오기
    const location = useLocation();
    const { noteId, editMode } = location.state || {};

    // 수정할 데이터 가져오기
    useEffect(() => {
        if (editMode) {
            const fetchData = async () => {
                const docRef = doc(db, 'note', noteId);
                const docSnap = await getDoc(docRef);
        
                if (docSnap.exists()) {
                    setFormData(docSnap.data());
                } 
                else {
                    console.log('No such document!');
                }
            };
            fetchData();
        }
        
    }, [editMode, noteId]);

    const modules = {
        toolbar: {
            container: [
                ["image"],
                [{ header: [1, 2, 3, 4, 5, false] }],
                ["bold", "underline"],
                [{ 'color': [] }, { 'background': [] }],
            ],
        }
    }

    useEffect(() => {
        // Firebase Storage에 이미지 업로드 및 URL 반환 함수
        const uploadImage = async (file) => {
            const storageRef = ref(storage, `images/note/${Date.now()}`);
            await uploadBytes(storageRef, file); // uploadBytes 사용
            const url = await getDownloadURL(storageRef); // getDownloadURL 사용
            return url;
        };

        const quill = quillRef.current.getEditor(); // Quill 인스턴스를 가져옴

        if (quill) {
            const showImageUI = () => {
                const input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');
                input.click();

                input.onchange = async () => {
                    const file = input.files[0];
                    if (file) {
                        try {
                            const imageUrl = await uploadImage(file);
                            const range = quill.getSelection();
                            if (range) {
                                setImageUrl(imageUrl)
                                quill.insertEmbed(range.index, 'image', imageUrl);
                            } else {
                                console.error('커서 위치를 찾을 수 없습니다.');
                            }
                        } catch (error) {
                            console.error('이미지 업로드 에러:', error);
                        }
                    }
                };
            };
            
            const toolbar = quill.getModule('toolbar');
            toolbar.addHandler('image', showImageUI);

        }
    }, [quillRef]); // quillRef가 변할 때마다 실행

    // 동적으로 상태 업데이트
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    // Quill의 content 업데이트
    const handleQuillChange = (value) => {
        setFormData((FormData) => ({
            ...FormData,
            content: value,
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        var date = new Date();

        if (editMode) {
            const docRef = doc(db, 'note', noteId);
            try {
                await updateDoc(docRef, {
                    title : formData.title,
                    subtitle : formData.subtitle,
                    content : formData.content,
                    tags : formData.tags,
                    imageUrl : imageUrl,
                    date,
                });
                history.push(`/note/detail/${noteId}`)
            } catch (error) {
                console.error('업데이트 실패:', error);
            }
        }
        else{
            try {
                if(!formData.title){
                    setTitleErrType(true)
                    setTimeout(() => setTitleErrType(false), 1000);
                }
                if(!formData.subtitle){
                    setSubTitleErrType(true)
                    setTimeout(() => setSubTitleErrType(false), 1000);
                }
                if(formData.title && formData.subtitle){
                    await addDoc(noteCollectionRef, {
                        title : formData.title,
                        subtitle : formData.subtitle,
                        content : formData.content,
                        tags : formData.tags,
                        imageUrl : imageUrl,
                        date,
                    })
                    .then((res) => {
                        history.push(`/note/detail/${res.id}`)
                    });
                }
            }
            catch (error) {
                console.log(error);
            }
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
                            <SC.Input placeholder={!titleErrType ? titleText : errText} onChange={handleChange} name='title' value={formData.title} />
                        </SC.InpBox>
                        <SC.InpBox $error={subTitleErrType}>
                            <SC.Input placeholder={!subTitleErrType ? subTitleText : errText} onChange={handleChange} name='subtitle' value={formData.subtitle} />
                        </SC.InpBox>
                    </SC.TitleArea>
                    <SC.DescArea>
                        <SC.InpBox>
                            <ReactQuill
                                style={{height: "500px"}}
                                onChange={handleQuillChange}
                                modules={modules}
                                value={formData.content}
                                ref={quillRef}
                                />
                        </SC.InpBox>
                        <SC.InpBox>
                            <SC.Input placeholder={tagsText} onChange={handleChange} name='tags' value={formData.tags} />
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
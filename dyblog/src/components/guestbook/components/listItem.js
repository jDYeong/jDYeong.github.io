import React, { useState } from 'react';
import * as C from "../index.style.js"
import * as S from "./components.style.js"
import { addDoc, collection, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../../firebase.js';
import { ReactComponent as Lock } from '../../../assets/images/icons/icon-lock.svg';

export const ListItemWrite = () => {

    const GBCollectionRef = collection(db, "guestbook");

    const [secretChk, setSecretChk] = useState(false);
    const [contentErrType, setContentErrType] = useState(false);
    const [pwErrType, setPwErrType] = useState(false);
    let date = new Date();
    
    const [formData, setFormData] = useState({
        content : "",
        name : "",
        pw : "",
        secret : false,
        modify : false,
        write_date : date,
    })

    const handleChkChange = (e) => {
        let isChecked = e.target.checked;
        setSecretChk(isChecked);
        setFormData((prevFormData) => ({
            ...prevFormData,
            secret: isChecked,
        }));
    }

    //동적 상태 변경
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    }

    const handleWriteSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedFormData = {
                ...formData,
                name: formData.name || "익명의 방문자",
                secret: secretChk
            };

            if(!updatedFormData.content){
                //alert('내용 입력해주세요')
                setContentErrType(true)
                setTimeout(() => setContentErrType(false), 1000);
                return
            }
            if(!updatedFormData.pw){
                //alert('비밀번호 입력해주세요')
                setPwErrType(true)
                setTimeout(() => setPwErrType(false), 1000);
                return
            }
            await addDoc(GBCollectionRef, updatedFormData);
                //인풋 초기화
                e.target[0].value="";
                e.target[1].value="";
                e.target[2].value="";
                e.target[3].checked=false;

                //데이터 값 초기화
                setFormData((formData) => ({
                    ...formData,
                    content : "",
                    name : "",
                    pw : "",
                    secret : false,
                    modify : false,
                    write_date : date,
                }));
            }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <S.GBitem>
            <form onSubmit={handleWriteSubmit}>
                <S.GBtxtbox $error={contentErrType}>
                    <input type='text' className='textarea' name="content" id="writeItem_txtarea" placeholder='방명록을 남길 수 있습니다.' onChange={handleChange} />
                </S.GBtxtbox>
                <S.GBinpbox>
                    <S.Txtleft $error={pwErrType}>
                        <input type="text" name='name' id='writeItem_id' placeholder="닉네임을 입력해 주세요." onChange={handleChange} />
                        <input type="password" name='pw' id='writeItem_pw' placeholder="비밀번호를 입력해 주세요." onChange={handleChange} />
                        <div>
                            <input type="checkbox" name="secret" id="writeItem_chk" onChange={handleChkChange} />
                            <label htmlFor="writeItem_chk">비밀글</label>
                        </div>
                    </S.Txtleft>
                    <S.Txtright>
                        <S.Btns className='btn-submit'>등록</S.Btns>
                    </S.Txtright>
                </S.GBinpbox>
            </form>
        </S.GBitem>
    );
};

export const ListItemDefault = (props) => {
    const itemId = props.allData[props.number].id;
    const itemNum = props.number;
    const itemData = props.allData[itemNum];
    const [pw, setPw] = useState('')
    const [pwErrType, setPwErrType] = useState(false);

    const handlePwChange = (e) => {
        setPw(e.target.value)
    }

    const handleIdChk = async (e) => {
        e.preventDefault();
        const GBCollectionRef = doc(db, "guestbook", itemId);
        if( pw == itemData.pw ){
            try {
                const updatedFormData = {
                    modify: true,
                };
                await updateDoc(GBCollectionRef, updatedFormData);
            } catch (error) {
                console.error('업데이트 실패:', error);
            }
        }else{
            setPwErrType(true)
            setTimeout(() => setPwErrType(false), 1000);
        }
    }

    return (
        <S.GBitem>
            <form onSubmit={handleIdChk}>
                <S.GBtxtbox>
                    {itemData.secret ? <S.textbox className='txt'><Lock />비밀글입니다.</S.textbox> : <S.textbox className='txt'>{itemData.content}</S.textbox>}
                </S.GBtxtbox>
                <S.GBinpbox>
                    <S.Txtleft $error={pwErrType}>
                        <S.idbox>{itemData.name}</S.idbox>
                        <input type="password" name='pw' id={`defaultItem_pw${itemNum}`} onChange={handlePwChange} placeholder="비밀번호를 입력해 주세요." />
                        <S.Btns className='btn-submit'>확인</S.Btns>
                    </S.Txtleft>
                    <S.Txtright>
                        <S.datebox>{itemData.write_date}</S.datebox>
                    </S.Txtright>
                </S.GBinpbox>
            </form>
        </S.GBitem>
    );
};

export const ListItemModify = (props) => {
    const itemId = props.allData[props.number].id;
    const itemNum = props.number;
    const itemData = props.allData[itemNum];
    let date = new Date();

    const [contentErrType, setContentErrType] = useState(false);
    const [pwErrType, setPwErrType] = useState(false);
    const [secretChk, setSecretChk] = useState(itemData.secret);

    const [formData, setFormData] = useState({
        content : itemData.content,
        name : itemData.name,
        pw : itemData.pw,
        secret : itemData.secret,
        modify : itemData.modify,
        write_date : itemData.date,
    })

    const handleChkChange = (e) => {
        let isChecked = e.target.checked;
        setSecretChk(isChecked);
        setFormData((prevFormData) => ({
            ...prevFormData,
            secret: isChecked,
        }));
    }

    //동적 상태 변경
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    }

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        try {
            const GBCollectionRef = doc(db, "guestbook", itemId);
            const updatedFormData = {
                content : formData.content,
                name: formData.name,
                pw : formData.pw,
                secret : secretChk,
                modify : false,
                write_date : date,
            };

            if(!updatedFormData.content){
                //alert('내용 입력해주세요')
                setContentErrType(true)
                setTimeout(() => setContentErrType(false), 1000);
                return
            }
            if(!updatedFormData.pw){
                //alert('비밀번호 입력해주세요')
                setPwErrType(true)
                setTimeout(() => setPwErrType(false), 1000);
                return
            }
            await updateDoc(GBCollectionRef, updatedFormData);
            //데이터 값 초기화
            setFormData((formData) => ({
                ...formData,
                content : "",
                name : "",
                pw : "",
                secret : false,
                modify : false,
                write_date : date,
            }));

        }
        catch (error) {
            console.error('업데이트 실패:', error);
        }
    }

    const handleCancel = async () => {
        const GBCollectionRef = doc(db, "guestbook", itemId);
        const updatedFormData = {
            modify : false,
        };
        await updateDoc(GBCollectionRef, updatedFormData);
    }

    const handleDelete = async () => {
        try{
            await deleteDoc(doc(db, 'guestbook', itemId));
        }
        catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    return (
        <S.GBitem>
            <form onSubmit={handleUpdateSubmit}>
                <S.GBtxtbox $error={contentErrType}>
                    <input type='text' className='textarea' name="content" id={`writeItem_txtarea${itemNum}`} placeholder='방명록을 남길 수 있습니다.' onChange={handleChange} value={formData.content} />
                </S.GBtxtbox>
                <S.GBinpbox>
                    <S.Txtleft $error={pwErrType}>
                        <S.idbox>{formData.name}</S.idbox>
                        <input type="password" name='pw' id={`defaultItem_pw${itemNum}`} onChange={handleChange} placeholder="비밀번호를 입력해 주세요."  value={formData.pw} />
                        <div>
                            <input type="checkbox" name="secret" id={`writeItem_chk${itemNum}`} onChange={handleChkChange} checked={formData.secret ? `checked` : null} />
                            <label htmlFor={`writeItem_chk${itemNum}`}>비밀글</label>
                        </div>
                    </S.Txtleft>
                    <S.Txtright>
                        <S.Btns type='button' className='btn-cancel' onClick={handleCancel}>취소</S.Btns>
                        <S.Btns type='button' className='btn-delete' onClick={handleDelete}>삭제</S.Btns>
                        <S.Btns className='btn-modify'>수정</S.Btns>
                    </S.Txtright>
                </S.GBinpbox>
            </form>
        </S.GBitem>
    );
};
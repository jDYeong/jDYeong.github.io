import React, { useEffect, useState } from 'react';
import * as S from './components.style'

const TagsListArea = (prop) => {
    
    const [tags, setTags] = useState([]);

    useEffect(() => {

        const fetchTags = async () => {
            const tagAll = prop.tagData;

            if (tagAll) {
                const tagsArray = tagAll.split(',').map(tag => tag.trim()); // 쉼표로 분리하고 공백 제거
                setTags(tagsArray); // 상태 업데이트
            }
            else{
                setTags([]);
            }
        }
        fetchTags();
    }, [prop.tagData]);

    

    return (
        <S.TagsListArea className='tag_area'>
            {tags.length > 0 ? (
                tags.map((tag, index) => (
                    <S.TagItem key={index}>#{tag}</S.TagItem>
                ))
            ) : (
               '' // 태그가 없을 경우 메시지 출력
            )}
        </S.TagsListArea>
    );
};

export default TagsListArea;
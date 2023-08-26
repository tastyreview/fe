import React from 'react';
import * as S from './style/TopDetail.style';
import { useNavigate } from 'react-router-dom';

export default function TopDetail() {
    const navigate = useNavigate();
    return (
        <S.TopDetailWrap>
            <S.StoreBanners>
                <S.StoreLeftImgs>
                    <S.StoreLeftTopImg src={'/imgs/food6.jpg'} />
                    <S.StoreLeftBottomImgs>
                        {new Array(3).fill(null).map((_, idx) => (
                            <S.GridImg key={idx} src={'/imgs/food6.jpg'} alt="storeImg" />
                        ))}
                    </S.StoreLeftBottomImgs>
                </S.StoreLeftImgs>
                <S.StoreRightImgs>
                    {new Array(4).fill(null).map((_, idx) => (
                        <S.GridImg key={idx} src={'/imgs/food6.jpg'} alt="storeImg" />
                    ))}
                </S.StoreRightImgs>
            </S.StoreBanners>
            <S.StoreName>오레노라멘 본점</S.StoreName>
            <S.StoreRegionAndType>
                <S.StoreRegion>마포구</S.StoreRegion>
                <S.StoreRegionBar>|</S.StoreRegionBar>
                <S.StoreType>일식</S.StoreType>
            </S.StoreRegionAndType>
            <S.ScoreInfo>
                <S.StarAverage>4.5</S.StarAverage>
                <S.StarAverageCount>(nn명의 평가) /</S.StarAverageCount>
                <S.LikesSymbol src={'/imgs/heartOrangeIcon.png'} />
                <S.LikesCount>(nnn)</S.LikesCount>
                <S.ViewInfo>
                    <S.ViewIcon src={'/imgs/viewIcon.png'} />
                    <S.ViewText>nnn+명이 봤어요</S.ViewText>
                </S.ViewInfo>
                <S.DividerLine></S.DividerLine>
            </S.ScoreInfo>
            <S.TopBtns>
                <S.TopBtn type="button">
                    <S.TopBtnIcon src={'/imgs/heartGrayIcon.png'} />
                    <S.TopBtnText>가고 싶다</S.TopBtnText>
                </S.TopBtn>
                <S.TopBtn type="button" onClick={() => navigate(`/review/1`)}>
                    <S.TopBtnIcon src={'/imgs/reviewIcon.png'} />
                    <S.TopBtnText>리뷰 쓰기</S.TopBtnText>
                </S.TopBtn>
                <S.TopBtn type="button" onClick={() => navigate(`/post/create`)}>
                    <S.TopBtnIcon src={'/imgs/mateIcon.png'} />
                    <S.TopBtnText>메이트 구하기</S.TopBtnText>
                </S.TopBtn>
            </S.TopBtns>
        </S.TopDetailWrap>
    );
}

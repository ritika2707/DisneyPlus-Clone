import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';

const Detail = (props) => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        db.collection("movies").doc(id).get().then((doc) => {
            if(doc.exists){
                setDetailData(doc.data());
            }else{
                console.log("no suxh document in firebase");
            }
        }).catch((error) => {
            console.log(error);
        });
    }, [id]);

    return (
    <Container>
        <Background>
            <img src={detailData.backgroundImg} alt={detailData.title} />
        </Background>

        <ImgTitle>
            <img src={detailData.titleImg} alt={detailData.title} />
        </ImgTitle>

        <ContentMeta>
            <Controls>
                <Player>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </Player>

                 <Trailer>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </Trailer>

                <AddList>
                    <span />
                    <span />
                </AddList>

                <GroupWatch>
                    <div>
                        <img src="/images/group-icon.png" alt="" />
                    </div>
                </GroupWatch>
            </Controls>

            <SubTitle>{detailData.subTitle}</SubTitle>

            <Description>{detailData.description}</Description>
        </ContentMeta>
    </Container>
    );
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    position: fixed;
    left: 0px;
    right: 0px;
    opacity: 0.8;
    top: 0px;
    z-index: -1;

    img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImgTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 50vh;
    min-height: 70px;
    padding-bottom: 24px;
    width: 100%;

    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }

    @media (max-width: 768px) {
      height: 40vh;
    }
`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`;

const Player = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    letter-spacing: 1.8px;
    background: rgb(249, 249, 249);
    border-radius: 4px;
    color: rgb(0, 0, 0);
    cursor: pointer;

    img {
        width: 32px;
    }

    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img {
            width: 25px;
        }
  }
`;

const Trailer = styled(Player)`
    background: rgb(0, 0, 0, 0.4);
    color: rgb(249, 249, 249);
    border: 1px solid rgb(249, 249, 249);

    &:hover {
        background: rgb(158, 158, 158);
    }
`;

const AddList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    height: 44px;
    width: 44px;
    border: 2px solid rgb(249, 249, 249);
    cursor: pointer;
    margin-right: 16px;

    span{
        background: rgb(249, 249, 249);
        display: inline-block;

        &:first-child {
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }

        &:nth-child(2) {
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }
`;

const GroupWatch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    width: 44px;
    border-radius: 50%;
    background: rgb(249, 249, 249);

    div {
        height: 41px;
        width: 41px;
        background: rgb(0, 0, 0, 0.8);
        border-radius: 50%;

        img {
            width: 100%;
        }
  }
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Description = styled.div `
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export default Detail;
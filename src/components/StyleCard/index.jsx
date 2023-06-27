import * as S from "./style"

const StyleCard = (props) => {
    return (
        <S.Container back={props.background}>
            <S.Profile profile={props.profile}></S.Profile>
        </S.Container>
    );
};

export default StyleCard;
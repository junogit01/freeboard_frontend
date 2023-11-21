import * as S from "./BoardList.styles";
import getDate from "./getDate";

export default function BoardListUI(props) {
  return (
    <S.Wrapper class="wrapper">
      <S.Twrap class="table">
        <S.Table>
          <S.THNumber>번호</S.THNumber>
          <S.THTitle>제목</S.THTitle>
          <S.THWriter>작성자</S.THWriter>
          <S.ThCreatedAt>날짜</S.ThCreatedAt>
          {props.data?.fetchBoards.map((el) => (
            <tr key={el._id}>
              <S.TdNumber>{String(el._id).slice(-4).toUpperCase()}</S.TdNumber>
              <S.TdTitle id={el._id} onClick={props.onClickToBoardDetail}>
                {el.title}
              </S.TdTitle>
              <S.TdWriter>{el.writer}</S.TdWriter>
              <S.TdCreatedAt>{getDate(el.createdAt)}</S.TdCreatedAt>
            </tr>
          ))}
        </S.Table>
      </S.Twrap>
      <S.Footer>
        <S.Button onClick={props.onClickToBoardNew}>
          <img src="/images/boards/list/write.png" alt="Pencil Img" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}

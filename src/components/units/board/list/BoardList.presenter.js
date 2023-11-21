import * as S from "./BoardList.styles";
import getDate from "./getDate";

export default function BoardListUI(props) {
  return (
    <S.Wrapper class="wrapper">
      <div class="table">
        <S.Table>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
          {props.data?.fetchBoards.map((el) => (
            <tr key={el._id}>
              <td>{String(el._id).slice(-4).toUpperCase()}</td>
              <td id={el._id} onClick={props.onClickToBoardDetail}>
                {el.title}
              </td>
              <td>{el.writer}</td>
              <td>{getDate(el.createdAt)}</td>
            </tr>
          ))}
        </S.Table>
      </div>
      <S.Footer>
        <S.Button onClick={props.onClickToBoardNew}>
          <img src="/images/boards/list/write.png" alt="Pencil Img" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}

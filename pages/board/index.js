import { Wrapper, Button } from "../../styles/boardcss";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 8) {
      number
      writer
      createdAt
      title
      contents
    }
  }
`;

export default function BoardPage() {
  const { data } = useQuery(FETCH_BOARD);
  console.log(data);
  return (
    <Wrapper>
      <div class="peoplesection">
        <div class="profile"></div>
        <div class="writer">{data?.fetchBoard?.writer}</div>
        <div class="createdAt">{data?.fetchBoard?.createdAt}</div>
      </div>
      <div class="body">
        <div class="bodyTitle">{data?.fetchBoard?.title}</div>
        <img></img>
        <div class="bodyContents">{data?.fetchBoard?.contents}</div>
        <div class="bodyVideo"></div>
      </div>
      <div class="footer"></div>
      <dlv class="btn">
        <div class="listbtn">
          <Button>목록으로</Button>
          <Button>수정하기</Button>
          <Button>삭제하기</Button>
        </div>
      </dlv>
    </Wrapper>
  );
}

// <div>
//   <div>1번 페이지 이동이 완료되었습니다.</div>
//   <div>작성자: {data?.fetchBoard.writer}</div>
//   <div>제목: {data?.fetchBoard.title}</div>
//   <div>내용: {data ? data.fetchBoard.contents : "로딩중입니다."}</div>
// </div>

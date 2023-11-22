import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD } from "../detail/BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const board = router.query.boardId;
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const onClickDelete = async (event) => {
    console.log(event.target.id);
    const result = deleteBoard({
      varables: {
        Id: router.query.boardId,
      },
    });
    router.push(`/boards/list`);
  };

  const onClickToList = (event) => {
    router.push(`/boards/list`);
  };
  return (
    <div>
      <div>컨테이너</div>
      <BoardDetailUI
        data={result}
        onClickDelete={onClickDelete}
        onClickToList={onClickToList}
      />
    </div>
  );
}

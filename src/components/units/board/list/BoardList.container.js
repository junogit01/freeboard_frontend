import BoardListUI from "./BoardList.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickToBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
  };

  return (
    <div>
      <BoardListUI
        data={data}
        onClickToBoardNew={onClickToBoardNew}
        onClickToBoardDetail={onClickToBoardDetail}
      />
    </div>
  );
}

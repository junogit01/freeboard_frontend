import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [zip, setZIp] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [link, setLink] = useState("");

  const [errorWriter, setErrorWriter] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContents, setErrorContents] = useState("");
  const [errorZip, seErrortZIp] = useState("");
  const [errorAddress1, setErrorAddress1] = useState("");
  const [errorAddress2, setErrorAddress2] = useState("");
  const [errorLink, setErrorLink] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  function handleChangeName(event) {
    setWriter(event.target.value);

    if (
      event.target.value &&
      writer &&
      password &&
      title &&
      contents &&
      zip &&
      address1 &&
      address2 &&
      link
    ) {
      setIsActive(true);
    }
  }
  function handleChangePassword(event) {
    setPassword(event.target.value);
    if (
      event.target.value &&
      writer &&
      password &&
      title &&
      contents &&
      zip &&
      address1 &&
      address2 &&
      link
    ) {
      setIsActive(true);
    }
  }
  function handleChangePostName(event) {
    setTitle(event.target.value);
    if (
      event.target.value &&
      writer &&
      password &&
      title &&
      contents &&
      zip &&
      address1 &&
      address2 &&
      link
    ) {
      setIsActive(true);
    }
  }
  function handleChangeContents(event) {
    setContents(event.target.value);
    if (
      event.target.value &&
      writer &&
      password &&
      title &&
      contents &&
      zip &&
      address1 &&
      address2 &&
      link
    ) {
      setIsActive(true);
    }
  }
  function handleChangeZip(event) {
    setZIp(event.target.value);
    if (
      event.target.value &&
      writer &&
      password &&
      title &&
      contents &&
      zip &&
      address1 &&
      address2 &&
      link
    ) {
      setIsActive(true);
    }
  }
  function handleChangeAddress1(event) {
    setAddress1(event.target.value);
    if (
      event.target.value &&
      writer &&
      password &&
      title &&
      contents &&
      zip &&
      address1 &&
      address2 &&
      link
    ) {
      setIsActive(true);
    }
  }
  function handleChangeAddress2(event) {
    setAddress2(event.target.value);
    if (
      event.target.value &&
      writer &&
      password &&
      title &&
      contents &&
      zip &&
      address1 &&
      address2 &&
      link
    ) {
      setIsActive(true);
    }
  }
  function handleChangeLink(event) {
    setLink(event.target.value);
    if (
      event.target.value &&
      writer &&
      password &&
      title &&
      contents &&
      zip &&
      address1 &&
      address2 &&
      link
    ) {
      setIsActive(true);
    }
  }

  const handleClickRegister = async () => {
    if (writer == "") {
      setErrorWriter("! 작성자를 정확히입력해주세요");
    }
    if (password == "") {
      setErrorPassword("! 비밀번호를 정확히입력해주세요");
    }
    if (title == "") {
      setErrorTitle("! 제목을 정확히입력해주세요");
    }
    if (contents == "") {
      setErrorContents("! 내용을 정확히입력해주세요");
    }
    if (zip == "") {
      seErrortZIp("! 우편번호를 정확히입력해주세요");
    }
    if (address1 == "") {
      setErrorAddress1("! 주소를 정확히입력해주세요");
    }
    if (address2 == "") {
      setErrorAddress2("! 주소를 정확히입력해주세요");
    }
    if (link == "") {
      setErrorLink("! 링크를 정확히입력해주세요");
    }
    if (
      writer !== "" &&
      password !== "" &&
      title !== "" &&
      contents !== "" &&
      zip !== "" &&
      address1 !== "" &&
      address2 !== "" &&
      link !== ""
    ) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
            },
          },
        });
        console.log(result.data.createBoard._id);
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };
  return (
    <div>
      <BoardWriteUI
        errorWriter={errorWriter}
        errorPassword={errorPassword}
        errorTitle={errorTitle}
        errorContents={errorContents}
        errorZip={errorZip}
        errorAddress1={errorAddress1}
        errorAddress2={errorAddress2}
        errorLink={errorLink}
        handleChangeName={handleChangeName}
        handleChangePassword={handleChangePassword}
        handleChangePostName={handleChangePostName}
        handleChangeContents={handleChangeContents}
        handleChangeZip={handleChangeZip}
        handleChangeAddress1={handleChangeAddress1}
        handleChangeAddress2={handleChangeAddress2}
        handleChangeLink={handleChangeLink}
        handleClickRegister={handleClickRegister}
        isActive={isActive}
      />
    </div>
  );
}

import {
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
} from "../../../styles/section14css";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      contetns
    }
  }
`;

export default function BoardsNewPage() {
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
    const value = event.target.value;
    setWriter(value);
  }
  function handleChangePassword(event) {
    const value = event.target.value;
    setPassword(value);
  }
  function handleChangePostName(event) {
    const value = event.target.value;
    setTitle(value);
  }
  function handleChangeContents(event) {
    const value = event.target.value;
    setContents(value);
  }
  function handleChangeZip(event) {
    const value = event.target.value;
    setZIp(value);
  }
  function handleChangeAddress1(event) {
    const value = event.target.value;
    setAddress1(value);
  }
  function handleChangeAddress2(event) {
    const value = event.target.value;
    setAddress2(value);
  }
  function handleChangeLink(event) {
    const value = event.target.value;
    setLink(value);
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
      console.log(result);
    }
  };
  return (
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={handleChangeName}
          />
          <div style={{ color: "red" }}>{errorWriter}</div>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 작성해주세요."
            onChange={handleChangePassword}
          />
          <div style={{ color: "red" }}>{errorPassword}</div>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={handleChangePostName}
        />
        <div style={{ color: "red" }}>{errorTitle}</div>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          onChange={handleChangeContents}
        />
        <div style={{ color: "red" }}>{errorContents}</div>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" onChange={handleChangeZip} />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <div style={{ color: "red" }}>{errorZip}</div>
        <Address onChange={handleChangeAddress1} />
        <div style={{ color: "red" }}>{errorAddress1}</div>
        <Address onChange={handleChangeAddress2} />
        <div style={{ color: "red" }}>{errorAddress2}</div>
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube
          placeholder="링크를 복사해주세요."
          onChange={handleChangeLink}
        />
        <div style={{ color: "red" }}>{errorLink}</div>
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={handleClickRegister}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

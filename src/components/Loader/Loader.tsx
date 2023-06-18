import { Comment } from "react-loader-spinner";

import { LoaderContainer } from "./Loader.styled";

export default function Loader() {
  return (
    <LoaderContainer>
      <Comment
        visible={true}
        height="200"
        width="200"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#471CA9"
      />
    </LoaderContainer>
  );
}

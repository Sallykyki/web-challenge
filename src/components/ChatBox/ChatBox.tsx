import React from "react";
import { MessageBox, MessageList, Input, Button } from "react-chat-elements";

const ChatBox = () => {
  return (
    <>
      <MessageList
        className="message-list"
        lockable={true}
        toBottomHeight={"100%"}
        dataSource={[
          {
            position: "right",
            type: "text",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            date: undefined,
          },
          {
            position: "left",
            type: "text",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            date: undefined,
          },
          {
            position: "right",
            type: "text",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            date: undefined,
          },
        ]}
      />
      <Input
        placeholder="Type here..."
        multiline={true}
        rightButtons={
          <Button color="white" backgroundColor="black" text="Send" />
        }
      />
    </>
  );
};

export default ChatBox;

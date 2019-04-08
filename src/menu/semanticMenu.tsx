import React, { useState } from "react";
import {
  Button,
  Sidebar,
  Icon,
  Segment,
  Header,
  Menu,
  Image
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export const SemanticMenu = () => {
  const [visible, setVisible] = useState(false);

  const handleHideClick = () => setVisible(false);
  const handleShowClick = () => setVisible(true);
  const handleSidebarHide = () => setVisible(false);

  return (
    <div>
      <Button.Group>
        <Button disabled={visible} onClick={handleShowClick}>
          Show sidebar
        </Button>
        <Button disabled={!visible} onClick={handleHideClick}>
          Hide sidebar
        </Button>
      </Button.Group>

      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="push"
          icon="labeled"
          inverted
          onHide={handleSidebarHide}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>
            <Header as="h3">Application Content</Header>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            {visible.toString()}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

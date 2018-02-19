import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Dropdown, Icon, Menu } from 'semantic-ui-react';

const propTypes = {
  activeMenuItem: PropTypes.string.isRequired,
};

function NavBar(props) {
  const { activeMenuItem } = props;

  return (
    <Menu pointing inverted size="small">
      <Container>
        <Menu.Item>
          <Menu.Item header>
            <Icon name="book" size="big" color="blue" />
            MyReads
          </Menu.Item>
        </Menu.Item>
        <Menu.Item
          name="home"
          as={Link}
          to="/"
          active={activeMenuItem === 'home'}
        />
        <Menu.Item
          name="search"
          as={Link}
          to="/search"
          active={activeMenuItem === 'search'}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Button
              primary
              content="Add Book"
              as={Link}
              to="/search"
            />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

NavBar.propTypes = propTypes;

export default NavBar;

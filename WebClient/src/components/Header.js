import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const HeaderExampleUsersIcon = () => (
  <div>
    <Header as='h6' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>
        Friends
      </Header.Content>
    </Header>
    

        <Header as='h1'>First Header</Header>
        <Header as='h2'>Second Header</Header>
        <Header as='h3'>Third Header</Header>
        <Header as='h4'>Fourth Header</Header>
        <Header as='h5'>Fifth Header</Header>
        <Header as='h6'>Sixth Header</Header>
  </div>
)

export default HeaderExampleUsersIcon

import React from 'react'
import PropTypes from 'prop-types'
import { Mutation, Button } from 'components'


const DeleteButton = ({ mutation, variables, update }) => (
  <Mutation mutation={mutation} variables={variables} update={update}>
    {(mutate) => <Button onClick={mutate} bgType="error">delete</Button>}
  </Mutation>
)

DeleteButton.defaultProps = {
  update: null,
}

DeleteButton.propTypes = {
  mutation: PropTypes.object.isRequired,
  variables: PropTypes.object.isRequired,
  update: PropTypes.func,
}

export default DeleteButton

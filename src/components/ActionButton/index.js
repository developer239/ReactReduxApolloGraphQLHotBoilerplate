import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { Button } from '@michal.jarnot/ui-components'


const ActionButton = ({ mutation, variables, update, label, onCompleted }) => (
  <Mutation mutation={mutation} variables={variables} update={update} onCompleted={onCompleted}>
    {(mutate, { loading }) => (
      <Button
        disabled={loading}
        onClick={mutate}
        isLoading={loading}
      >
        {label}
      </Button>
    )}
  </Mutation>
)

ActionButton.defaultProps = {
  onCompleted: null,
  update: null,
  variables: null,
}

ActionButton.propTypes = {
  mutation: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  variables: PropTypes.object,
  update: PropTypes.func,
  onCompleted: PropTypes.func,
}

export default ActionButton

import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { Spinner, Alert } from '@michal.jarnot/ui-components'


export const MutationWrapper = ({ children, ...rest }) => (
  <Mutation {...rest}>
    {(mutate, { loading, error, data }) => {
      if (loading) {
        return <Spinner />
      }

      if (error) {
        return <Alert isError>Error! {error.message}</Alert>
      }

      return children(mutate, { loading, error, data })
    }}
  </Mutation>
)

MutationWrapper.defaultProps = {
  children: () => null,
}

MutationWrapper.propTypes = {
  children: PropTypes.func,
}

export default MutationWrapper

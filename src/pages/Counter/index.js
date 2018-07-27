import React from 'react'
import { H2, P } from 'components/Typography'
import { Query, DeleteButton } from 'components'
import {
  COUNTER_VALUE,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  DOUBLE_COUNTER,
} from 'modules/counter/gql'


export const CounterPage = () => (
  <section>
    <H2>Counter Page</H2>
    <P>
      Fusce nibh. Phasellus rhoncus. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum
      in, elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Aliquam erat volutpat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Nullam rhoncus aliquam metus. Curabitur sagittis hendrerit ante. Nullam faucibus mi
      quis velit.
    </P>
    <Query query={COUNTER_VALUE}>
      {({ data: { counterValue } }) => (
        <P>
          Current counter value is: <strong id="value">{counterValue}</strong>
        </P>
      )}
    </Query>
    <DeleteButton btnBgType={null} mutation={INCREMENT_COUNTER} label="increment" />
    <DeleteButton btnBgType={null} mutation={DECREMENT_COUNTER} label="decrement" />
    <DeleteButton
      btnBgType={null}
      mutation={DOUBLE_COUNTER}
      label="double (async)"
      onCompleted={({ doubleCounterValueAsync }) => {
        // If you need to work with the counter value when the action is complete:
        console.log('new value ', doubleCounterValueAsync.counterValue)
      }}
    />
  </section>
)

CounterPage.propTypes = {}

export default CounterPage

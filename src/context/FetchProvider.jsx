import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'

/**
 * Default values for fetch context.
 */
const defaultFetchValues = {
  sortBy: 'popularity.desc',
};

/**
 * Fetch context.
 */
export const FetchContext = React.createContext()

/**
 * Context provider.
 *
 * @param {Object} props
 * @param {JSX.Element} props.children The children inside provider.
 * @param {Object} props.newValues The provider's values.
 *
* @return {JSX.Element}
 */
export function FetchProvider({ children, newValues }) {
  const [values, setValues] = useState(newValues)
  const contextValue = useMemo(() => ({ setValues, values }), [values])

  return (
    <FetchContext.Provider value={contextValue}>
      {children}
    </FetchContext.Provider>
  )
}

FetchProvider.propTypes = {
  children: PropTypes.node.isRequired,
  newValues: PropTypes.instanceOf(Object),
}

FetchProvider.defaultProps = {
  newValues: defaultFetchValues,
}

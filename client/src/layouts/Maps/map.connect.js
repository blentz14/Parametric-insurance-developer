import Maps from './Maps'
import { drizzleConnect } from '@drizzle/react-plugin'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    MarineInsurance: state.contracts.MarineInsurance,
    drizzleStatus: state.drizzleStatus
  }
};

const MapsContainer = drizzleConnect(Maps, mapStateToProps);

export default MapsContainer

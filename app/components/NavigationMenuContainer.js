import { connect } from 'react-redux';
import { setStatus } from '../actions/actions';
import NavigationMenu from './NavigationMenu';


function mapStateToProps(state) {
  return { selectedStatus: state.selectedStatus };
}

function mapDispatchToProps(dispatch) {
  return {
    handleItemPress: (status) => {
      dispatch(setStatus(status)); },
  };
}

const NavigationMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationMenu);

export default NavigationMenuContainer;

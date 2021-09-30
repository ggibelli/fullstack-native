import * as React from 'react';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { IOrder } from '../RepositoryList';
import { AllRepositoriesOrderBy, OrderDirection } from '../../generated/graphql';

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    margin: 10,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    color: 'black',
    backgroundColor: 'white',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

enum EnumOrder {
  LATEST_REPOSITORY,
  OLDERST_REPOSITORY,
  HIGHEST_RATED,
  LOWEST_RATED,
}

const Order: React.FC<{ order: IOrder; setOrder: React.Dispatch<React.SetStateAction<IOrder>> }> =
  ({ order, setOrder }) => {
    const [orderBy, setOrderBy] = React.useState<EnumOrder>();
    const handleChange = (orderBy: EnumOrder) => {
      switch (orderBy) {
        case EnumOrder.LATEST_REPOSITORY:
          setOrderBy(orderBy);
          setOrder({
            orderBy: AllRepositoriesOrderBy.CreatedAt,
            orderDirection: OrderDirection.Desc,
          });
          break;
        case EnumOrder.OLDERST_REPOSITORY:
          setOrderBy(orderBy);

          setOrder({
            orderBy: AllRepositoriesOrderBy.CreatedAt,
            orderDirection: OrderDirection.Asc,
          });
          break;
        case EnumOrder.HIGHEST_RATED:
          setOrderBy(orderBy);

          setOrder({
            orderBy: AllRepositoriesOrderBy.RatingAverage,
            orderDirection: OrderDirection.Desc,
          });
          break;
        case EnumOrder.LOWEST_RATED:
          setOrderBy(orderBy);

          setOrder({
            orderBy: AllRepositoriesOrderBy.RatingAverage,
            orderDirection: OrderDirection.Asc,
          });
          break;

        default:
          break;
      }
    };
    return (
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(itemValue, itemIndex) => handleChange(itemValue as EnumOrder)}
        items={[
          { key: 1, label: 'Latest repositories', value: EnumOrder.LATEST_REPOSITORY },
          { key: 2, label: 'Oldest repositories', value: EnumOrder.OLDERST_REPOSITORY },
          { key: 3, label: 'Highest rated repositories', value: EnumOrder.HIGHEST_RATED },
          { key: 4, label: 'Lowest rated repositories', value: EnumOrder.LOWEST_RATED },
        ]}></RNPickerSelect>
    );
  };

export default Order;

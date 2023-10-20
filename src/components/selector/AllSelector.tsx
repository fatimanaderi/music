import { QueryItem } from "../../data/query";
import useAllSelector from "../../hooks/useAllSelector";
import Selector from "./Selector";
interface Props {
  valueSelector: string;
  onChangedValue: (value: string) => void;
  queryItem: QueryItem;
}
const AllSelector = ({ valueSelector, onChangedValue, queryItem }: Props) => {
  const { data, error } = useAllSelector(queryItem);
  if (error) return null;
  return (
    <Selector
      name={queryItem.name}
      data={data}
      valueSelector={valueSelector}
      onChangedValue={onChangedValue}
    />
  );
};
export default AllSelector;

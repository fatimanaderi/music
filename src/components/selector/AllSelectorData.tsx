import { QueryData } from "../main/Main";
import Selector from "./Selector";

interface Props {
  valueSelector: string;
  onChangedValue: (value: string) => void;
  query: QueryData;
}
const AllSelectorData = ({ valueSelector, onChangedValue, query }: Props) => {
  return (
    <Selector
      name={query.name}
      data={query.data}
      valueSelector={valueSelector}
      onChangedValue={onChangedValue}
    />
  );
};
export default AllSelectorData;

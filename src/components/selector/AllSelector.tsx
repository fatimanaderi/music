import useAllSelector from "../../hooks/useAllSelector";
import { Query } from "../main/Main";
import Selector from "./Selector";
interface Props {
  valueSelector: string;
  onChangedValue: (value: string) => void;
  query: Query;
}
const AllSelector = ({ valueSelector, onChangedValue, query }: Props) => {
  const { data, error } = useAllSelector(query);
  if (error) return null;
  return (
    <Selector
      name={query.query}
      data={data}
      valueSelector={valueSelector}
      onChangedValue={onChangedValue}
    />
  );
};
export default AllSelector;

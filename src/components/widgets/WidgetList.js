import widgetsCollection from "../../store/sample-widgets";
import Card from "../layout/Card";

function WidgetList({ widgets }) {
  let widgetArray = widgets || widgetsCollection;
  return (
    <>
      {(widgetArray).map((widget) => (
        <Card
          key={`${widget.id}`}
          widget={widget}
        />
      ))}
    </>
  );
}

export default WidgetList;

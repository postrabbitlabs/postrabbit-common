import PaneLayout from "@/libs/components/app/PaneLayout.tsx";

const PaneLayoutPage = () => {
  return <div>
    <PaneLayout layoutId={'s'} height={'100px'} primary={
      <div>1</div>
    }
     secondary={
      <div>2</div>
     } vertical={false} />
  </div>
}
export default PaneLayoutPage

import './App.css';
import SeparatorDemo from './Components/Separator/Separator';
// import AccordionDemo from './Layout/Accordian/Accordian';
import './Components/Accordian/Accordian';
import AlertDialogDemo from './Components/AlertDialog/AlertDialog';
import AvatarDemo from './Components/Avatar/Avatar';
import CheckboxDemo from './Components/Checkbox/Checkbox';
import DialogDemo from './Components/Dialog/Dialog';
function App() {
  return (
    <>
      {/* <AccordionDemo /> */}
      <AlertDialogDemo />
      <AvatarDemo />
      <AvatarDemo />
      <SeparatorDemo/>
      <CheckboxDemo/>
      <DialogDemo/>
    </>
  );
}

export default App;

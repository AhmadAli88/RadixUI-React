import './App.css';
import SeparatorDemo from './Components/Separator/Separator';
import './Components/Accordian/Accordian';
import AlertDialogDemo from './Components/AlertDialog/AlertDialog';
import AvatarDemo from './Components/Avatar/Avatar';
import CheckboxDemo from './Components/Checkbox/Checkbox';
import DialogDemo from './Components/Dialog/Dialog';
import DropdownMenuDemo from './Components/Dropdown/Dropdown';
import FormDemo from './Components/Form/Form';
import HoverCardDemo from './Components/HoverCard/HoverCard';
import MenubarDemo from './Components/Menubar/Menubar';
import AccordionDemo from './Components/Accordian/Accordian';
import ProgressDemo from './Components/ProgressBar/ProgressBar';
import RadioGroupDemo from './Components/RadioGroup/RadioGroup';
import ScrollAreaDemo from './Components/ScrollArea/ScrollArea';
import SelectDemo from './Components/Select/Select';
import SliderDemo from './Components/Slider/slider';
import SwitchDemo from './Components/Switch/Switch';
import ToastDemo from './Components/Toast/Toast';
import TooltipDemo from './Components/Tooltip/Tooltip';
function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', gap: '30px', flexDirection: 'column', width: '100%'}}> 
      <AccordionDemo />
      <AlertDialogDemo />
      <AvatarDemo />
      <AvatarDemo />
      <SeparatorDemo/>
      <CheckboxDemo/>
      <DialogDemo/>
      <DropdownMenuDemo/>
      <FormDemo/>
      <HoverCardDemo/>
      <MenubarDemo/>
      <ProgressDemo/>
      <RadioGroupDemo/>
      <ScrollAreaDemo/>
      <SelectDemo/>
      <SliderDemo/>
      <SwitchDemo/>
      <ToastDemo/>
      <TooltipDemo/>
    </div>
  );
}

export default App;

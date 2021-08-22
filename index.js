import { registerRootComponent } from "expo"; //imported this package from expo
import App from './src/App'; //imported the App screen

//register the App screen as the ROOT component, which means this component is
//essentially "home base", whihc means this is where react native configures 
//this as the source of all truth in your project
registerRootComponent(App);

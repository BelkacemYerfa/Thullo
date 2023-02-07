import { File } from "../components/file";
import { NavBar } from "../components/navbar";
import { ToDos } from "../components/ToDos";

export const Home = ()=>{
 return(
   <>
    <NavBar />
    <File />
    <ToDos />
   </>
 );
}
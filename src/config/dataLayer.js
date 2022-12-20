import { 
 useContext , 
 createContext ,
 useReducer
} from "react";


export const DataLayerContext = createContext()
export const DataLayer = ({
 initialState , reducer , children
}) =>(
 <DataLayerContext.Provider value={useReducer(reducer,initialState)} >
  {children}
 </DataLayerContext.Provider>
)

export const useDataLayervValue = ()=> useContext(DataLayerContext)
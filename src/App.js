import { useState } from "react";
import Card from "./components/Card";
import { ProductPopup } from "./components/ProductPopup";
import DynamicPopup from "./components/DynamicPopup";
import ConfirmDialog from "./components/ConfirmDialog";

// initialFields
const initialFieldValues = {
  id: 0,
  title: "",
  price: "",
  image: ""
}

function App() {
  const [values, setValues] = useState(initialFieldValues);
    
  const [openPopup, setOpenPopup] = useState(false);
  
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subtitle: '',
    onConfirm: () => { },
  });

  const addProduct=()=>{
    setOpenPopup(true);
  }

  return (
    <div className="container">
      <div className="md:mx-5 lg:mx-20 xl:mx-40">
        
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-5 mb-5 text-center">PRODUCTS LIST</h1>
        
        <div className="text-center"> 
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4" onClick={addProduct}>
  Add Product
</button>
</div>


        <Card />
      </div>

   
{openPopup === true && (
  <DynamicPopup
    openPopup={openPopup}
    title="Add Product"
    onClose={() => {

      setOpenPopup(false);
      setValues(initialFieldValues);

    }}
    maxWidth="md"
  >
    <ProductPopup
      setOpenPopup={setOpenPopup}
      values={values}
      setValues={setValues}
      initialFieldValues={initialFieldValues}
      confirmDialog={confirmDialog}
      setConfirmDialog={setConfirmDialog}
      
    />
  </DynamicPopup>
)}



<ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />

</div>


  );
}

export default App;

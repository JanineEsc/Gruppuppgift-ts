import CreateThread from '../../components/CreateThread';

// const CreatePage = () => {
//   return (
//     <div>
//       <CreateThread />
//     </div>
//   );
// };

// export default CreatePage;


import Navbar from "../_components/navbar";

export default function Create() {
    return (
      <>
         <Navbar/>
         <CreateThread />
      </>
    );
  }
  
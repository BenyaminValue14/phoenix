import React, { useEffect, useState } from "react";
import CheckIcon2 from "../svg/CheckIcon2";

type IProps = {
  title: string;
  handleOK: ()=>void;
  handleClose: ()=>void;
  showButton?: boolean;
}

const SuccessModal = ({title, handleOK, handleClose, showButton=true}: IProps) => {
  const [userClick, setUserClick] = useState(false);
  const Success = () => {
    setUserClick(true);
    //callback
    handleOK();
  }
  const clickClose = () => {
    setUserClick(true);
    handleClose();
  }

  useEffect(() => {
    if (!showButton) {
      handleOK();
    }
  }, []);

  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity"></div>
      <div aria-hidden="true" className="overflow-y-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
        {/*hidden overflow-x-hidden  */}
        <div className="relative p-4 w-full max-w-md h-full md:h-auto center-absolute" style={{maxWidth: 600 + 'px', top: 50 + '%', left: 50 + '%', transform: 'translate(-50%,-50%)'}}>
          {/* content */}
          <div className="relative p-4 text-center bg-primary rounded-lg shadow sm:p-5 sm:pt-10">
            {/*header */}
            <div className="mx-auto flex justify-center flex-shrink-0 items-center rounded-full mb-4 p-4">
              <CheckIcon2 />
            </div>
            <p className="mb-4 text-lg font-mont font-normal mx-auto text-white" style={{maxWidth: 320 + 'px'}}>{title}</p>
            {
              showButton ? (
                <div className="flex gap-3 py-4 mx-auto" style={{maxWidth: 320 + 'px'}}>
                  <button type="button" onClick={Success} className={`button  ${userClick ? 'disabled' : 'active'}`} disabled={userClick ? true : false}>
                    Continuar
                  </button>
                  <button type="button" className="button" onClick={clickClose}>
                    Cancelar
                  </button>
                </div>
              ) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default SuccessModal;

// 'use server'
import toast from "react-hot-toast";

const customStyleError = {
  backgroundColor: "#D80027",
  color: "#FFFFFF",
};

const customStyleSuccess = {
    backgroundColor: "#3CBF61",
    color: "#FFFFFF",
  };

export const handleToastError = (text: string) => {
  toast.error(text, { style: customStyleError, duration: 3000 });
};

export const handleToastSuccess = (text: string) => {
    toast.success(text, { style: customStyleSuccess, duration: 3000 });
  };